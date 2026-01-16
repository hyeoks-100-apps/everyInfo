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

const basePath = resolveBasePath();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubActions
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
