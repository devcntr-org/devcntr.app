import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getPrerenderRoutes } from "./site-routes.mjs";
import { injectHtmlFallback, writeCrawlability } from "./write-crawlability.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, ".output", "public");
const indexHtml = join(pub, "index.html");

if (!existsSync(indexHtml)) {
  console.warn("spa-fallback: missing .output/public/index.html — skip");
  process.exit(0);
}

const html = readFileSync(indexHtml, "utf8");

function ensureSpa(dir) {
  mkdirSync(dir, { recursive: true });
  const target = join(dir, "index.html");
  if (!existsSync(target)) writeFileSync(target, html);
}

for (const route of getPrerenderRoutes()) {
  if (route === "/") continue;
  ensureSpa(join(pub, ...route.replace(/^\//, "").split("/").filter(Boolean)));
}

writeCrawlability(pub);
injectHtmlFallback(indexHtml);
const enhanced = readFileSync(indexHtml, "utf8");
writeFileSync(join(pub, "404.html"), enhanced);
