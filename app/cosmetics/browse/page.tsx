import type { Metadata } from 'next';
import Link from 'next/link';
import CosmeticsBrowse from '../../../components/cosmetics/CosmeticsBrowse';

export const metadata: Metadata = {
  title: '화장품 조회',
  description: '필터로 화장품을 탐색하고 나에게 맞는 제품을 찾아보세요.',
  alternates: {
    canonical: '/cosmetics/browse/',
  },
};

export default function CosmeticsBrowsePage() {
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
        <Link className="subtab" href="/cosmetics/">
          추천
        </Link>
        <Link className="subtab active" href="/cosmetics/browse/">
          조회
        </Link>
      </div>
      <CosmeticsBrowse />
    </div>
  );
}
