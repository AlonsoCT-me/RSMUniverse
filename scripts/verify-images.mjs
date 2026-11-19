import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

// Check the working tree after checkout has hydrated Git LFS objects.
const images = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
  .split("\0")
  .filter((file) => /\.(?:png|jpe?g|webp)$/i.test(file));
if (images.length === 0) throw new Error("No tracked images found.");

const errors = [];
for (const file of images) {
  try {
    const bytes = readFileSync(file);
    if (bytes.subarray(0, 80).toString().startsWith("version https://git-lfs.github.com/spec/v1")) {
      throw new Error("unresolved Git LFS pointer");
    }
    const extension = file.split(".").pop().toLowerCase();
    const valid = extension === "webp"
      ? bytes.subarray(0, 4).toString() === "RIFF" && bytes.subarray(8, 12).toString() === "WEBP"
      : extension === "png"
        ? bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
        : bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
    if (!valid) throw new Error("invalid image signature");
  } catch (error) {
    errors.push(`${file}: ${error.message}`);
  }
}
if (errors.length) throw new Error(errors.join("\n"));
console.log(`Verified ${images.length} real images; no Git LFS pointers remain.`);
