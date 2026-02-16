# everyInfo

카테고리별 정적 정보/캘린더/추천 페이지를 SEO 친화적으로 제공하는 Next.js 프로젝트입니다.

## 로컬 실행 방법

```bash
npm install
npm run dev
```

## 빌드 방법

```bash
npm run build
```

빌드가 완료되면 `out/` 폴더에 정적 파일이 생성됩니다.

## 검색 엔진 제출 (Google Search Console / Play Console 확인용)

- 사이트맵 제출 주소: `https://<내-도메인>/sitemap.xml`
- robots 주소: `https://<내-도메인>/robots.txt`
- GitHub Pages 또는 커스텀 도메인 배포 시, 빌드 환경변수 `SITE_URL`을 실제 운영 도메인으로 설정해야 올바른 절대 URL이 생성됩니다.

## 공모주(IPO) 데이터 스키마

- 타입 정의/샘플 데이터: `data/ipo2026.ts`
- 집계/슬러그 유틸: `data/ipo.ts`
- JSON 스키마(크롤러용): `public/ipo-offering-schema.json`
- AI 수집 파이프라인에서 스키마를 채우면 `/ipo/`, `/ipo/2026/`, `/ipo/company/[slug]/`, `/ipo/market/[market]/`, `/ipo/manager/[slug]/` 페이지에서 자동 렌더링됩니다.
- 핵심 필드: `slug`, `companyNameKo`, `market`, `status`, `subscriptionStartDate`, `subscriptionEndDate`, `offerPriceBand`, `leadManagers`, `sourceUrls`, `officialNoticeUrl`, `lastUpdatedAt`

## GitHub Pages 설정 방법

1. GitHub 저장소의 **Settings > Pages** 메뉴로 이동합니다.
2. **Source**를 **GitHub Actions**로 설정합니다.
3. `main` 브랜치에 푸시하면 GitHub Actions 워크플로우가 자동으로 배포를 진행합니다.

## basePath 및 배포 URL 동작 원리

- `next.config.mjs`는 GitHub Actions 환경에서만 `basePath`/`assetPrefix`를 설정합니다.
- `GITHUB_REPOSITORY`가 `<owner>.github.io`로 끝나는 경우 유저/조직 페이지로 판단하여 `basePath`는 비웁니다.
- 프로젝트 페이지라면 `/repo`를 `basePath`로 자동 설정합니다.

### 커스텀 도메인 또는 강제 basePath 설정

- `BASE_PATH_OVERRIDE` 환경 변수가 있으면 해당 값을 최우선으로 사용합니다. (빈 문자열도 가능)
- `SITE_URL` 환경 변수가 있으면 sitemap/robots 및 메타데이터에 사용하는 절대 URL을 직접 지정할 수 있습니다.

예시:

```bash
BASE_PATH_OVERRIDE="" SITE_URL="https://everyinfo.example" npm run build
```
