import type { MetadataRoute } from 'next';
import { linkCollections } from '../data/linkCollections';
import { products } from '../data/cosmetics/products';
import { slugify } from '../data/cosmetics/utils';
import { siteUrl } from '../lib/site';

const buildUrl = (path: string) => `${siteUrl}${path}`;

const staticRoutes = [
  '/',
  '/about/',
  '/links/',
  '/marathon/',
  '/marathon/2026/',
  '/game/',
  '/game/2026/',
  '/beauty/',
  '/beauty/2026/',
  '/cosmetics/',
  '/cosmetics/2026/',
  '/cosmetics/browse/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const linkCategoryRoutes = linkCollections.map((category) => `/links/${category.id}/`);

  const productRoutes = products.map((product) => ({
    url: buildUrl(`/cosmetics/product/${product.slug}/`),
    lastModified: new Date(product.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const brandRoutes = Array.from(
    new Set(products.map((product) => slugify(product.brandKo)))
  ).map((slug) => ({
    url: buildUrl(`/cosmetics/brand/${slug}/`),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  const ingredientRoutes = Array.from(
    new Set(products.flatMap((product) => product.ingredientSlugs ?? []))
  ).map((slug) => ({
    url: buildUrl(`/cosmetics/ingredient/${slug}/`),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  return [
    ...staticRoutes.map((path) => ({
      url: buildUrl(path),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: path === '/' ? 1 : 0.7,
    })),
    ...linkCategoryRoutes.map((path) => ({
      url: buildUrl(path),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    })),
    ...productRoutes,
    ...brandRoutes,
    ...ingredientRoutes,
  ];
}
