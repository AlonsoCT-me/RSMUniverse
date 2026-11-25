import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}
const publicPaths = new Set(
  files(join(root, "public")).map((path) => "/" + relative(join(root, "public"), path)),
);
const sources = [
  ...files(join(root, "src")).filter((path) => /\.(?:tsx?|s?css|json)$/.test(path)),
  join(root, "index.html"),
];
const errors = [];
let references = 0;
for (const path of sources) {
  const text = readFileSync(path, "utf8");
  for (const match of text.matchAll(/\/(?:assets|logo)\/[^"'`)\n]+/g)) {
    const asset = decodeURIComponent(match[0].split(/[?#]/)[0]);
    references++;
    // Comparing the exact directory entries also catches case mismatches on macOS.
    if (!publicPaths.has(asset))
      errors.push(`${relative(root, path)}: missing/case-mismatched asset ${asset}`);
  }
  for (const match of text.matchAll(/from\s+["']([^"']+\.(?:png|jpe?g|webp|svg|ico))["']/g)) {
    const imported = match[1];
    const candidate = imported.startsWith("@/")
      ? join(root, "src", imported.slice(2))
      : join(path, "..", imported);
    references++;
    assert.ok(
      files(join(root, "src")).includes(candidate),
      `${relative(root, path)}: missing image import ${imported}`,
    );
  }
}
if (errors.length) throw new Error(errors.join("\n"));
console.log(
  `Verified ${references} runtime image references, including assetUrl, CSS backgrounds and favicons; exact casing matches.`,
);
