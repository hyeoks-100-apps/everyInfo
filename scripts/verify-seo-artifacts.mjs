import { readFile } from 'fs/promises';
import path from 'path';

const outputDir = path.join(process.cwd(), 'out');
const sitemapPath = path.join(outputDir, 'sitemap.xml');
const robotsPath = path.join(outputDir, 'robots.txt');

const fail = (message) => {
  console.error(`SEO validation failed: ${message}`);
  process.exit(1);
};

const extractLocs = (sitemap) => {
  const matches = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g));
  return matches.map((match) => match[1]);
};

const main = async () => {
  const [sitemap, robots] = await Promise.all([
    readFile(sitemapPath, 'utf-8').catch(() => fail('missing out/sitemap.xml')),
    readFile(robotsPath, 'utf-8').catch(() => fail('missing out/robots.txt')),
  ]);

  if (!sitemap.includes('<urlset')) {
    fail('sitemap.xml does not contain a <urlset> root element');
  }

  const locs = extractLocs(sitemap);
  if (locs.length === 0) {
    fail('sitemap.xml has no <loc> entries');
  }

  const requiredPaths = ['/', '/links/', '/cosmetics/', '/ipo/', '/ipo/market/', '/ipo/manager/'];
  const missingPaths = requiredPaths.filter(
    (requiredPath) => !locs.some((loc) => loc.endsWith(requiredPath))
  );

  if (missingPaths.length > 0) {
    fail(`sitemap.xml is missing required paths: ${missingPaths.join(', ')}`);
  }

  const sitemapLine = robots
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line.toLowerCase().startsWith('sitemap:'));

  if (!sitemapLine) {
    fail('robots.txt does not contain a Sitemap line');
  }

  const sitemapUrl = sitemapLine.replace(/^sitemap:\s*/i, '').trim();
  if (!sitemapUrl) {
    fail('robots.txt Sitemap line is empty');
  }

  if (!locs[0].startsWith('http://') && !locs[0].startsWith('https://')) {
    fail('sitemap.xml loc values are not absolute URLs');
  }

  if (!robots.toLowerCase().includes('user-agent: *')) {
    fail('robots.txt does not contain User-agent: *');
  }

  console.log('SEO artifacts validation passed.');
  console.log(`- URLs found in sitemap: ${locs.length}`);
  console.log(`- robots sitemap: ${sitemapUrl}`);
};

await main();
