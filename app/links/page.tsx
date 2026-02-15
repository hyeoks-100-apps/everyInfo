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

const faqItems = [
  {
    question: '주소 모음 페이지는 얼마나 자주 업데이트되나요?',
    answer: '카테고리별 주요 사이트 주소를 주기적으로 점검하고 최신 상태로 반영합니다.',
  },
  {
    question: '카테고리별 바로가기는 어디서 볼 수 있나요?',
    answer: '페이지 상단 카테고리 목록과 탐색기에서 원하는 카테고리로 바로 이동할 수 있습니다.',
  },
  {
    question: '인기 사이트만 확인할 수 있나요?',
    answer: '각 카테고리 상세 페이지에서 인기 태그가 붙은 사이트를 우선적으로 확인할 수 있습니다.',
  },
];

export default function LinksPage() {
  const pageUrl = `${siteUrl}/links/`;

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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '주소 모음',
        item: pageUrl,
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>주소 모음</span>
      </div>
      <section className="seo-summary">
        <h1 className="section-title">주소 모음</h1>
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
      <section className="seo-summary" aria-label="자주 묻는 질문">
        <h2 className="section-title">자주 묻는 질문</h2>
        <ul className="seo-list">
          {faqItems.map((item) => (
            <li key={item.question}>
              <strong>Q. {item.question}</strong>
              <p>A. {item.answer}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
