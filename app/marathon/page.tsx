import type { Metadata } from 'next';
import Link from 'next/link';
import MarathonList from '../../components/MarathonList';
import { siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: '마라톤 일정',
  description:
    '연도 구분 없이 마라톤 대회 일정과 지역, 코스 필터를 한 번에 확인합니다.',
  keywords: ['마라톤 일정', '마라톤 대회', '러닝 대회', '코스별 마라톤'],
  alternates: {
    canonical: '/marathon/',
  },
  openGraph: {
    title: '마라톤 일정',
    description:
      '연도 구분 없이 마라톤 대회 일정과 지역, 코스 필터를 한 번에 확인합니다.',
    url: '/marathon/',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: '마라톤', item: `${siteUrl}/marathon/` },
  ],
};

export default function MarathonIndexPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>마라톤</span>
      </div>
      <h1 className="section-title">마라톤 일정</h1>
      <p className="section-description">
        앞으로 예정된 대회를 중심으로 지역, 코스, 월별 필터로 빠르게 찾아보세요.
      </p>
      <MarathonList />
    </div>
  );
}
