import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const widgetUrl = "https://static.userback.io/widget/v1.js";
const source = readFileSync(new URL("../src/userback.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(
  source.replaceAll("import.meta.env", "testEnv"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } },
).outputText;

function setup({ env = {}, origin, pathname, existingScript = false } = {}) {
  const scripts = existingScript ? [{ src: widgetUrl }] : [];
  const window = {
    location: {
      origin: origin ?? "https://alonsoct-me.github.io",
      pathname: pathname ?? "/RSMUniverse/",
      hash: "#/",
    },
  };
  const exports = {};
  const context = {
    exports,
    window,
    testEnv: {
      PROD: true,
      MODE: "production",
      BASE_URL: "/RSMUniverse/",
      VITE_USERBACK_ACCESS_TOKEN: "public-widget-test-value",
      ...env,
    },
    document: {
      querySelector: () => scripts.find((script) => script.src === widgetUrl),
      createElement: () => ({}),
      head: { appendChild: (script) => scripts.push(script) },
    },
  };
  runInNewContext(compiled, context);
  return { init: exports.initUserback, window, scripts };
}

test("review deployment loads one official asynchronous widget without identifying users", () => {
  const { init, window, scripts } = setup();
  init();
  init();
  for (const hash of ["#/coleccion", "#/producto/rsm-blue", "#/special-edition", "#/nuestra-historia"]) {
    window.location.hash = hash;
    init();
  }
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].src, widgetUrl);
  assert.equal(scripts[0].async, true);
  assert.equal(window.Userback.access_token, "public-widget-test-value");
  assert.deepEqual(Object.keys(window.Userback), ["access_token"]);
});

for (const [name, options] of [
  ["missing token", { env: { VITE_USERBACK_ACCESS_TOKEN: undefined } }],
  ["blank token", { env: { VITE_USERBACK_ACCESS_TOKEN: "   " } }],
  ["development", { env: { PROD: false, MODE: "development" } }],
  ["Figma development preview build", { env: { MODE: "development" } }],
  ["non-Pages build", { env: { BASE_URL: "/" } }],
  ["Figma hosted build", { env: { BASE_URL: "https://example.figma.site/" } }],
  ["local preview", { origin: "http://localhost:8443" }],
  ["another deployment", { origin: "https://example.com" }],
  ["another Pages repository", { pathname: "/another-prototype/" }],
  ["similar base path", { pathname: "/RSMUniverse-other/" }],
]) {
  test(`${name} does not initialize Userback or inject a script`, () => {
    const { init, window, scripts } = setup(options);
    init();
    assert.equal(scripts.length, 0);
    assert.equal(window.Userback, undefined);
  });
}

test("an existing official script is not duplicated or reconfigured", () => {
  const { init, window, scripts } = setup({ existingScript: true });
  window.Userback = { access_token: "existing-widget-value" };
  init();
  assert.equal(scripts.length, 1);
  assert.equal(window.Userback.access_token, "existing-widget-value");
});
