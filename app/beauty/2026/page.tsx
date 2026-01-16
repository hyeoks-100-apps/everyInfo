import type { Metadata } from 'next';
import Link from 'next/link';
import { beautyRecommendations2026 } from '../../../data/beauty2026';

export const metadata: Metadata = {
  title: '2026 화장품 추천',
  description: '2026년 주목할 화장품 추천 리스트입니다.',
  alternates: {
    canonical: '/beauty/2026/',
  },
};

export default function Beauty2026Page() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/beauty/">화장품</Link>
        <span>/</span>
        <span>2026</span>
      </div>
      <h1 className="section-title">2026 화장품 추천</h1>
      <p className="section-description">
        스킨케어, 메이크업, 클렌징 카테고리를 중심으로 구성했습니다.
      </p>

      <div className="list-grid">
        {beautyRecommendations2026.map((item) => (
          <article key={item.name} className="info-card">
            <span className="tag">{item.category}</span>
            <h3>{item.name}</h3>
            <p>{item.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
