import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const base = "https://nova-agency-nu.vercel.app";
const publicPages = ["index.html", "services.html", "portfolio.html", "a-propos.html"];
const noindexPages = ["contact.html", "legal.html", "privacy.html"];

const html = Object.fromEntries(await Promise.all(
  [...publicPages, ...noindexPages].map(async (path) => [
    path,
    await readFile(new URL(`../${path}`, import.meta.url), "utf8"),
  ]),
));
const robots = await readFile(new URL("../robots.txt", import.meta.url), "utf8");
const sitemap = await readFile(new URL("../sitemap.xml", import.meta.url), "utf8");
const llms = await readFile(new URL("../llms.txt", import.meta.url), "utf8");

test("each complete public page has one matching canonical and og:url", () => {
  for (const path of publicPages) {
    const url = `${base}/${path === "index.html" ? "" : path}`;
    const canonical = html[path].match(/<link rel="canonical" href="([^"]+)"/g) ?? [];
    const ogUrl = html[path].match(/<meta property="og:url" content="([^"]+)"/g) ?? [];
    assert.equal(canonical.length, 1, `${path}: one canonical`);
    assert.equal(ogUrl.length, 1, `${path}: one og:url`);
    assert.ok(html[path].includes(`<link rel="canonical" href="${url}">`), `${path}: canonical origin`);
    assert.ok(html[path].includes(`<meta property="og:url" content="${url}">`), `${path}: og:url`);
  }
});

test("pages with placeholders or inactive contact handling are noindex", () => {
  for (const path of noindexPages) {
    assert.match(html[path], /<meta name="robots" content="noindex,follow">/, path);
  }
});

test("sitemap lists exactly the complete public pages", () => {
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expected = publicPages.map((path) => `${base}/${path === "index.html" ? "" : path}`);
  assert.deepEqual(urls, expected);
});

test("robots references the selected public sitemap", () => {
  assert.ok(robots.includes("User-agent: *"));
  assert.ok(robots.includes("Allow: /"));
  assert.ok(robots.includes(`Sitemap: ${base}/sitemap.xml`));
});

test("homepage JSON-LD is valid and identifies the site without invented business data", () => {
  const match = html["index.html"].match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match);
  const graph = JSON.parse(match[1]);
  assert.equal(graph["@context"], "https://schema.org");
  assert.ok(graph["@graph"].some((node) => node["@type"] === "WebSite" && node.url === `${base}/`));
  assert.ok(graph["@graph"].some((node) => node["@type"] === "Organization" && node.name === "Nova Agency"));
  assert.doesNotMatch(match[1], /telephone|address|aggregateRating|review|priceRange/i);
});

test("llms.txt preserves the concept-vs-client-work distinction and outstanding blockers", () => {
  assert.match(llms, /not completed client work/i);
  assert.match(llms, /placeholder access key/i);
  assert.match(llms, /not ready for definitive public publication/i);
});
