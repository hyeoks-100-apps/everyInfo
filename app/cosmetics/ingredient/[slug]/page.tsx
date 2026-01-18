import type { Metadata } from 'next';
import Link from 'next/link';

type PageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params }: PageProps): Metadata => ({
  title: `${params.slug} 성분 정보`,
  description: '성분 디렉토리 페이지는 준비 중입니다.',
  alternates: {
    canonical: `/cosmetics/ingredient/${params.slug}/`,
  },
});

export default function CosmeticsIngredientPage({ params }: PageProps) {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/cosmetics/">화장품</Link>
        <span>/</span>
        <span>성분</span>
      </div>
      <h1 className="section-title">{params.slug}</h1>
      <p className="section-description">
        해당 성분 상세 페이지는 추후 데이터 추가 예정입니다.
      </p>
      <div className="notice">성분 정보는 준비 중입니다.</div>
    </div>
  );
}
