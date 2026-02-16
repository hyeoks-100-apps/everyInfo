import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryCard from '../components/CategoryCard';

export const metadata: Metadata = {
  title: {
    absolute: 'everyInfo',
  },
  description: '카테고리별 정적 정보/캘린더/추천 페이지를 한 곳에서 확인하세요.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <h1>카테고리별 정보 허브, everyInfo</h1>
        <p>
          마라톤 일정, 게임 추천, 화장품 트렌드, 공모주 캘린더, 주소 모음을
          SEO 친화적인 정적 페이지로 모아서 제공합니다.
        </p>
        <p>
          <Link className="card-link" href="/ipo/">
            공모주 페이지 바로가기 →
          </Link>
        </p>
      </section>

      <section>
        <h2 className="section-title">인기 카테고리</h2>
        <p className="section-description">
          원하는 카테고리를 선택하고 최신 정보를 확인하세요.
        </p>
        <div className="card-grid">
          <CategoryCard
            title="마라톤"
            description="연도별 마라톤 대회 일정과 캘린더를 확인합니다."
            href="/marathon/"
          />
          <CategoryCard
            title="게임"
            description="출시 예정/추천 게임을 한눈에 살펴봅니다."
            href="/game/"
          />
          <CategoryCard
            title="화장품"
            description="트렌드 기반 화장품 추천 리스트를 제공합니다."
            href="/cosmetics/"
          />
          <CategoryCard
            title="주소 모음"
            description="웹툰, OTT, 스포츠 등 인기 사이트 주소를 모아봤어요."
            href="/links/"
          />
          <CategoryCard
            title="공모주"
            description="공모주 청약 일정과 기업별 핵심 정보를 제공합니다."
            href="/ipo/"
          />
        </div>
      </section>
    </div>
  );
}
