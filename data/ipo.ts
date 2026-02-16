import { ipoOfferings2026, type IpoOffering } from './ipo2026';

export const ipoOfferings = ipoOfferings2026;

const parseDate = (value: string) => {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
};

const today = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

export const isPastOffering = (offering: IpoOffering) =>
  parseDate(offering.subscriptionEndDate) < today() ||
  offering.status === 'closed' ||
  offering.status === 'listed';

export const splitOfferingsByVisibility = (offerings: IpoOffering[]) => ({
  visible: offerings.filter((offering) => !isPastOffering(offering)),
  hidden: offerings.filter((offering) => isPastOffering(offering)),
});

export const sortBySubscriptionDate = (offerings: IpoOffering[]) =>
  [...offerings].sort(
    (left, right) =>
      parseDate(left.subscriptionStartDate).getTime() -
      parseDate(right.subscriptionStartDate).getTime()
  );

export const getIpoByYear = (year: string) =>
  sortBySubscriptionDate(
    ipoOfferings.filter((offering) => offering.subscriptionStartDate.startsWith(`${year}-`))
  );

export const getUpcomingIpoByYear = (year: string) => {
  const { visible } = splitOfferingsByVisibility(getIpoByYear(year));
  return visible;
};

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
      .filter((manager) => manager !== '미정')
      .map((manager) => [managerSlugify(manager), manager] as const)
  ).entries()
).map(([slug, name]) => ({ slug, name }));

export const getIpoBySlug = (slug: string) =>
  ipoOfferings.find((offering) => offering.slug === slug);

export const getIpoByMarket = (market: string) =>
  sortBySubscriptionDate(ipoOfferings.filter((offering) => offering.market === market));

export const getIpoByManagerSlug = (slug: string) => {
  const manager = ipoManagers.find((item) => item.slug === slug);
  if (!manager) {
    return { managerName: null, offerings: [] as IpoOffering[] };
  }

  return {
    managerName: manager.name,
    offerings: sortBySubscriptionDate(
      ipoOfferings.filter((offering) => offering.leadManagers.includes(manager.name))
    ),
  };
};
