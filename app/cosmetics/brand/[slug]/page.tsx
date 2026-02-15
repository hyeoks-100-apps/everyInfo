import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '../../../../data/cosmetics/products';
import { slugify } from '../../../../data/cosmetics/utils';

type PageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params }: PageProps): Metadata => ({
  title: `${params.slug} 브랜드 정보`,
  description: '브랜드 디렉토리 페이지는 준비 중입니다.',
  alternates: {
    canonical: `/cosmetics/brand/${params.slug}/`,
  },
  robots: {
    index: false,
    follow: true,
  },
});

export const generateStaticParams = () => {
  const unique = new Set(products.map((product) => slugify(product.brandKo)));
  return Array.from(unique).map((slug) => ({ slug }));
};

export const dynamicParams = false;

export default function CosmeticsBrandPage({ params }: PageProps) {
  const brandName =
    products.find((product) => slugify(product.brandKo) === params.slug)
      ?.brandKo ?? params.slug;
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/cosmetics/">화장품</Link>
        <span>/</span>
        <span>브랜드</span>
      </div>
      <h1 className="section-title">{brandName}</h1>
      <p className="section-description">
        해당 브랜드 상세 페이지는 추후 데이터 추가 예정입니다.
      </p>
      <div className="notice">브랜드 정보는 준비 중입니다.</div>
    </div>
  );
}
