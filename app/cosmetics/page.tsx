import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import CosmeticsBrowse from '../../components/cosmetics/CosmeticsBrowse';

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
        추천과 조회를 한 화면에서 바로 확인할 수 있어요.
      </p>
      <Suspense fallback={<div className="notice">조회 화면을 불러오는 중입니다.</div>}>
        <CosmeticsBrowse />
      </Suspense>
    </div>
  );
}
