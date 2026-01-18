import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '화장품',
  description: '추천 리스트와 제품/성분 조회를 제공해요.',
  alternates: {
    canonical: '/cosmetics/',
  },
};

export default function CosmeticsPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>화장품</span>
      </div>
      <h1 className="section-title">화장품</h1>
      <p className="section-description">
        추천 리스트와 제품/성분 조회를 제공해요.
      </p>
      <div className="subtabs">
        <Link className="subtab active" href="/cosmetics/">
          추천
        </Link>
        <Link className="subtab" href="/cosmetics/browse/">
          조회
        </Link>
      </div>
      <div className="card-grid">
        <Link className="card" href="/cosmetics/2026/">
          <h3>2026 화장품 추천</h3>
          <p>스킨케어와 메이크업 트렌드를 반영한 추천입니다.</p>
          <span className="card-link">2026 추천 보기 →</span>
        </Link>
      </div>
    </div>
  );
}
