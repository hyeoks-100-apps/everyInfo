import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About everyInfo',
  description: 'everyInfo 서비스 소개, 데이터 출처, 문의 안내 페이지입니다.',
  alternates: {
    canonical: '/about/',
  },
};

export default function AboutPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>About</span>
      </div>
      <h1 className="section-title">everyInfo 소개</h1>
      <p className="section-description">
        everyInfo는 카테고리별 정적 정보와 추천 콘텐츠를 제공하는 서비스입니다.
      </p>

      <section className="info-card" aria-label="데이터 출처">
        <h2>데이터 출처</h2>
        <p>
          현재는 예시 데이터를 사용하고 있으며, 추후 공식 기관 및 브랜드의
          공지 데이터를 반영할 예정입니다.
        </p>
      </section>

      <section className="info-card" aria-label="문의 안내">
        <h2>문의</h2>
        <p>
          제휴 및 데이터 제공 문의는{' '}
          <a href="mailto:hello@everyinfo.example">hello@everyinfo.example</a>
          로 연락해주세요.
        </p>
      </section>
    </div>
  );
}
