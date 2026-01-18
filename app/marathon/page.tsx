import type { Metadata } from 'next';
import Link from 'next/link';
import MarathonList from '../../components/MarathonList';

export const metadata: Metadata = {
  title: '마라톤 일정',
  description:
    '연도 구분 없이 마라톤 대회 일정과 지역, 코스 필터를 한 번에 확인합니다.',
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
        앞으로 예정된 대회를 중심으로 지역, 코스, 월별 필터로 빠르게 찾아보세요.
      </p>
      <MarathonList />
    </div>
  );
}
