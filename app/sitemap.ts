import type { MetadataRoute } from 'next';
import { linkCollections } from '../data/linkCollections';
import { products } from '../data/cosmetics/products';
import { ipoOfferings2026 } from '../data/ipo2026';
import { slugify } from '../data/cosmetics/utils';
import { siteUrl } from '../lib/site';

const buildUrl = (path: string) => `${siteUrl}${path}`;

const staticRoutes = [
  '/',
  '/about/',
  '/links/',
  '/links/search/',
  '/marathon/',
  '/marathon/2026/',
  '/game/',
  '/game/2026/',
  '/beauty/',
  '/beauty/2026/',
  '/cosmetics/',
  '/cosmetics/2026/',
  '/cosmetics/browse/',
  '/ipo/',
  '/ipo/2026/',
];

const toEntry = (
  path: string,
  {
    lastModified,
    changeFrequency,
    priority,
  }: {
    lastModified: Date;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }
): MetadataRoute.Sitemap[number] => ({
  url: buildUrl(path),
  lastModified,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const linkCategoryRoutes = linkCollections.map((category) => `/links/${category.id}/`);

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: buildUrl(`/cosmetics/product/${product.slug}/`),
    lastModified: new Date(product.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const brandRoutes: MetadataRoute.Sitemap = Array.from(
    new Set(products.map((product) => slugify(product.brandKo)))
  ).map((slug) => ({
    url: buildUrl(`/cosmetics/brand/${slug}/`),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  const ingredientRoutes: MetadataRoute.Sitemap = Array.from(
    new Set(products.flatMap((product) => product.ingredientSlugs ?? []))
  ).map((slug) => ({
    url: buildUrl(`/cosmetics/ingredient/${slug}/`),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) =>
    toEntry(path, {
      lastModified: now,
      changeFrequency: 'weekly',
      priority: path === '/' ? 1 : 0.7,
    })
  );

  const linkCategoryEntries: MetadataRoute.Sitemap = linkCategoryRoutes.map((path) =>
    toEntry(path, {
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  );

  const ipoEntries: MetadataRoute.Sitemap = ipoOfferings2026.map((offering) => ({
    url: buildUrl(`/ipo/company/${offering.slug}/`),
    lastModified: new Date(offering.lastUpdatedAt),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...linkCategoryEntries,
    ...productRoutes,
    ...brandRoutes,
    ...ingredientRoutes,
    ...ipoEntries,
  ];
}
