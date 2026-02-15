import { ipoOfferings2026 } from './ipo2026';

export const ipoOfferings = ipoOfferings2026;

export const ipoMarkets = Array.from(new Set(ipoOfferings.map((offering) => offering.market)));

export const managerSlugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[\s/]+/g, '-')
    .replace(/[^a-z0-9가-힣-]/g, '')
    .replace(/-+/g, '-');

export const ipoManagers = Array.from(
  new Map(
    ipoOfferings
      .flatMap((offering) => offering.leadManagers)
      .map((manager) => [managerSlugify(manager), manager] as const)
  ).entries()
).map(([slug, name]) => ({ slug, name }));

export const getIpoBySlug = (slug: string) =>
  ipoOfferings.find((offering) => offering.slug === slug);

export const getIpoByMarket = (market: string) =>
  ipoOfferings.filter((offering) => offering.market === market);

export const getIpoByManagerSlug = (slug: string) => {
  const manager = ipoManagers.find((item) => item.slug === slug);
  if (!manager) {
    return { managerName: null, offerings: [] };
  }

  return {
    managerName: manager.name,
    offerings: ipoOfferings.filter((offering) => offering.leadManagers.includes(manager.name)),
  };
};
