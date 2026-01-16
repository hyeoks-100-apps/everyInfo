import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '마라톤 일정',
  description: '연도별 마라톤 대회 일정과 캘린더 정보를 제공합니다.',
  alternates: {
    canonical: '/marathon/',
  },
};

export default function MarathonIndexPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>마라톤</span>
      </div>
      <h1 className="section-title">마라톤 일정</h1>
      <p className="section-description">
        연도별 마라톤 대회 일정 페이지로 이동하세요.
      </p>
      <div className="card-grid">
        <Link className="card" href="/marathon/2026/">
          <h3>2026 마라톤 일정</h3>
          <p>대회명, 날짜, 지역 정보를 한 번에 확인하세요.</p>
          <span className="card-link">2026 일정 보기 →</span>
        </Link>
      </div>
    </div>
  );
}
