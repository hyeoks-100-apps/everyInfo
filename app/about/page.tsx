import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: 'About everyInfo',
  description: 'everyInfo 서비스 소개, 데이터 출처, 문의 안내 페이지입니다.',
  alternates: {
    canonical: '/about/',
  },
  openGraph: {
    title: 'About everyInfo',
    description: 'everyInfo 서비스 소개, 데이터 출처, 문의 안내 페이지입니다.',
    url: '/about/',
  },
};

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'everyInfo 소개',
  url: `${siteUrl}/about/`,
  inLanguage: 'ko-KR',
  description: 'everyInfo 서비스 소개, 데이터 출처, 문의 안내 페이지',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteUrl,
  email: 'hello@everyinfo.example',
};

export default function AboutPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>About</span>
      </div>
      <h1 className="section-title">everyInfo 소개</h1>
      <p className="section-description">
        everyInfo는 카테고리별 정적 정보와 추천 콘텐츠를 제공하는 서비스입니다.
      </p>

      <section className="info-card" aria-label="데이터 출처">
        <h2>데이터 출처</h2>
        <p>
          현재는 예시 데이터를 사용하고 있으며, 추후 공식 기관 및 브랜드의
          공지 데이터를 반영할 예정입니다.
        </p>
      </section>

      <section className="info-card" aria-label="업데이트 정책">
        <h2>업데이트 정책</h2>
        <p>
          카테고리별 페이지는 주기적으로 점검하며, 변동이 잦은 정보는 우선적으로
          갱신합니다. 변경이 반영되면 검색엔진이 재크롤링할 수 있도록 사이트맵도
          함께 갱신됩니다.
        </p>
      </section>

      <section className="info-card" aria-label="문의 안내">
        <h2>문의</h2>
        <p>
          제휴 및 데이터 제공 문의는{' '}
          <a href="mailto:hello@everyinfo.example">hello@everyinfo.example</a>
          로 연락해주세요.
        </p>
      </section>
    </div>
  );
}
