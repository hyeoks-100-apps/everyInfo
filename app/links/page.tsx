import type { Metadata } from 'next';
import Link from 'next/link';
import LinksExplorer from '../../components/LinksExplorer';
import { linkCollections } from '../../data/linkCollections';

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
  return (
    <div>
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
    </div>
  );
}
