import type { Metadata } from 'next';
import Link from 'next/link';
import LinksExplorer from '../../components/LinksExplorer';
import { linkCollections } from '../../data/linkCollections';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: '주소 모음',
  description: '웹툰, OTT, 스포츠, 커뮤니티 등 인기 사이트 주소를 카테고리별로 정리했습니다.',
  keywords: ['주소 모음', '사이트 주소', '웹툰', 'OTT', '스포츠', '커뮤니티', '쇼핑', '학습'],
  alternates: {
    canonical: '/links/',
  },
  openGraph: {
    title: '주소 모음',
    description: '웹툰, OTT, 스포츠, 커뮤니티 등 인기 사이트 주소를 카테고리별로 정리했습니다.',
    url: '/links/',
  },
  twitter: {
    card: 'summary_large_image',
    title: '주소 모음',
    description: '웹툰, OTT, 스포츠, 커뮤니티 등 인기 사이트 주소를 카테고리별로 정리했습니다.',
  },
};

export default function LinksPage() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '주소 모음 카테고리 목록',
    itemListElement: linkCollections.map((category, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${category.title} 주소 모음`,
      url: `${siteUrl}/links/${category.id}/`,
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>주소 모음</span>
      </div>
      <section className="seo-summary">
        <h2 className="section-title">주소 모음이란?</h2>
        <p className="section-description">
          자주 찾는 웹툰, OTT, 스포츠, 커뮤니티, 쇼핑 사이트 주소를 카테고리별로
          정리해 빠르게 탐색할 수 있도록 만든 큐레이션 페이지입니다.
        </p>
        <ul className="seo-list">
          {linkCollections.map((category) => (
            <li key={category.id}>
              <Link href={`/links/${category.id}/`}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <LinksExplorer categories={linkCollections} />
      <section className="seo-summary">
        <h2 className="section-title">자주 묻는 질문</h2>
        <ul className="seo-list">
          <li>Q. 주소 모음 페이지는 얼마나 자주 업데이트되나요? → 카테고리별로 주기적으로 점검합니다.</li>
          <li>Q. 카테고리별 바로가기는 어디서 볼 수 있나요? → 위 목록 또는 탐색기에서 바로 이동할 수 있습니다.</li>
          <li>Q. 인기 사이트만 보고 싶다면? → 카테고리 상세 페이지에서 인기 태그를 확인해보세요.</li>
        </ul>
      </section>
    </div>
  );
}
