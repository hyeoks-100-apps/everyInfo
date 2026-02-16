import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import CosmeticsBrowse from '../../components/cosmetics/CosmeticsBrowse';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: '화장품',
  description: '추천 리스트와 제품/성분 조회를 제공해요.',
  keywords: ['화장품', '화장품 추천', '성분 검색', '브랜드별 화장품'],
  alternates: {
    canonical: '/cosmetics/',
  },
  openGraph: {
    title: '화장품',
    description: '추천 리스트와 제품/성분 조회를 제공해요.',
    url: '/cosmetics/',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: '화장품', item: `${siteUrl}/cosmetics/` },
  ],
};

export default function CosmeticsPage() {
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
      <h1 className="section-title">화장품</h1>
      <p className="section-description">
        추천과 조회를 한 화면에서 바로 확인할 수 있어요.
      </p>
      <Suspense fallback={<div className="notice">조회 화면을 불러오는 중입니다.</div>}>
        <CosmeticsBrowse />
      </Suspense>
    </div>
  );
}
