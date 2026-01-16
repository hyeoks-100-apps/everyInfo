const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePathOverride = process.env.BASE_PATH_OVERRIDE;

const normalizeBasePath = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) {
    return '';
  }
  const stripped = trimmed.replace(/^\/+|\/+$/g, '');
  return stripped ? `/${stripped}` : '';
};

export const resolveBasePath = () => {
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

export const basePath = resolveBasePath();

export const resolveSiteUrl = () => {
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

export const siteUrl = resolveSiteUrl();

export const siteConfig = {
  name: 'everyInfo',
  description: '카테고리별 정적 정보, 캘린더, 추천 페이지를 모아 제공하는 everyInfo입니다.',
  locale: 'ko_KR',
  ogImage: '/og-placeholder.svg',
};
