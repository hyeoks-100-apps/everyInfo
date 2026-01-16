import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'out');
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePathOverride = process.env.BASE_PATH_OVERRIDE;

const normalizeBasePath = (value) => {
  if (!value) {
    return '';
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return '';
  }
  const stripped = trimmed.replace(/^\/+|\/+$/g, '');
  return stripped ? `/${stripped}` : '';
};

const resolveBasePath = () => {
  if (basePathOverride !== undefined) {
    return normalizeBasePath(basePathOverride);
  }
  if (!isGithubActions) {
    return '';
  }
  const repository = process.env.GITHUB_REPOSITORY || '';
  const repoName = repository.split('/')[1] || '';
  if (!repoName || repoName.endsWith('.github.io')) {
    return '';
  }
  return `/${repoName}`;
};

const resolveSiteUrl = (basePath) => {
  const siteUrlOverride = process.env.SITE_URL;
  if (siteUrlOverride) {
    return siteUrlOverride.replace(/\/+$/g, '');
  }
  if (isGithubActions) {
    const repository = process.env.GITHUB_REPOSITORY || '';
    const [owner] = repository.split('/');
    if (owner) {
      return `https://${owner}.github.io${basePath}`;
    }
  }
  return `http://localhost:3000${basePath}`;
};

const basePath = resolveBasePath();
const siteUrl = resolveSiteUrl(basePath);

const routes = [
  '/',
  '/marathon/',
  '/marathon/2026/',
  '/game/',
  '/game/2026/',
  '/beauty/',
  '/beauty/2026/',
  '/about/',
  '/404.html',
];

const joinUrl = (base, route) => {
  if (route === '/') {
    return `${base}/`;
  }
  return `${base}${route}`;
};

const ensureOutDir = async () => {
  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true });
  }
};

const ensureNoJekyll = async () => {
  const nojekyllPath = path.join(outputDir, '.nojekyll');
  if (!existsSync(nojekyllPath)) {
    await writeFile(nojekyllPath, '');
  }
};

const generateSitemap = async () => {
  const urls = routes
    .filter((route) => route !== '/404.html')
    .map((route) => `  <url><loc>${joinUrl(siteUrl, route)}</loc></url>`)
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  await writeFile(path.join(outputDir, 'sitemap.xml'), sitemap);
};

const generateRobots = async () => {
  const robots = `User-agent: *\nAllow: /\nSitemap: ${joinUrl(siteUrl, '/sitemap.xml')}\n`;
  await writeFile(path.join(outputDir, 'robots.txt'), robots);
};

await ensureOutDir();
await ensureNoJekyll();
await generateSitemap();
await generateRobots();
