import type { Metadata } from 'next';
import Link from 'next/link';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: '게임 추천',
  description: '연도별 게임 추천 리스트를 제공합니다.',
  keywords: ['게임 추천', '출시 예정 게임', '연도별 게임'],
  alternates: {
    canonical: '/game/',
  },
  openGraph: {
    title: '게임 추천',
    description: '연도별 게임 추천 리스트를 제공합니다.',
    url: '/game/',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: '게임', item: `${siteUrl}/game/` },
  ],
};

export default function GameIndexPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>게임</span>
      </div>
      <h1 className="section-title">게임 추천</h1>
      <p className="section-description">
        트렌드 기반 추천 게임을 연도별로 확인하세요.
      </p>
      <div className="card-grid">
        <Link className="card" href="/game/2026/">
          <h3>2026 게임 추천</h3>
          <p>주목할 만한 타이틀을 모아 소개합니다.</p>
          <span className="card-link">2026 추천 보기 →</span>
        </Link>
      </div>
    </div>
  );
}
