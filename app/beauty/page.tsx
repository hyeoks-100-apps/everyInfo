import type { Metadata } from 'next';
import Link from 'next/link';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: '화장품 추천',
  description: '연도별 화장품 추천 리스트를 제공합니다.',
  keywords: ['화장품 추천', '뷰티 추천', '스킨케어 추천', '메이크업 추천'],
  alternates: {
    canonical: '/beauty/',
  },
  openGraph: {
    title: '화장품 추천',
    description: '연도별 화장품 추천 리스트를 제공합니다.',
    url: '/beauty/',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: '화장품', item: `${siteUrl}/beauty/` },
  ],
};

export default function BeautyIndexPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>화장품</span>
      </div>
      <h1 className="section-title">화장품 추천</h1>
      <p className="section-description">
        카테고리별 화장품 추천 리스트를 연도별로 제공합니다.
      </p>
      <div className="card-grid">
        <Link className="card" href="/beauty/2026/">
          <h3>2026 화장품 추천</h3>
          <p>스킨케어와 메이크업 트렌드를 반영한 추천입니다.</p>
          <span className="card-link">2026 추천 보기 →</span>
        </Link>
      </div>
    </div>
  );
}
