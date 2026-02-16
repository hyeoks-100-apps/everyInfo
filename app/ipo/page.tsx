import type { Metadata } from 'next';
import Link from 'next/link';
import { getIpoByYear, getUpcomingIpoByYear, splitOfferingsByVisibility } from '../../data/ipo';

export const metadata: Metadata = {
  title: '공모주 청약 캘린더',
  description: '연도별 공모주 청약 일정과 핵심 지표를 한눈에 확인합니다.',
  keywords: ['공모주', 'IPO', '청약 일정', '주관사', '수요예측'],
  alternates: {
    canonical: '/ipo/',
  },
  openGraph: {
    title: '공모주 청약 캘린더',
    description: '연도별 공모주 청약 일정과 핵심 지표를 한눈에 확인합니다.',
    url: '/ipo/',
  },
};

export default function IpoIndexPage() {
  const offerings2026 = getIpoByYear('2026');
  const { hidden } = splitOfferingsByVisibility(offerings2026);
  const upcoming2026 = getUpcomingIpoByYear('2026');

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>공모주</span>
      </div>
      <h1 className="section-title">공모주 청약 캘린더</h1>
      <p className="section-description">
        청약 일정·주관사·공모가를 빠르게 확인할 수 있는 공모주 정보 허브입니다.
      </p>

      <section className="info-card" style={{ marginBottom: '1rem' }}>
        <h2>서비스 안내</h2>
        <ul>
          <li>기본 목록에는 진행 예정/진행중인 일정만 노출됩니다.</li>
          <li>마감/상장 완료된 종목은 페이지 하단의 “지난 일정”에서 확인할 수 있습니다.</li>
          <li>투자 전에는 반드시 공시/DART와 주관사 안내를 최종 확인하세요.</li>
        </ul>
        <p>
          현재 2026년 기준 <strong>{upcoming2026.length}건</strong> 진행 예정,{' '}
          <strong>{hidden.length}건</strong> 지난 일정이 있습니다.
        </p>
      </section>

      <div className="card-grid">
        <Link className="card" href="/ipo/2026/">
          <h3>2026 공모주 일정</h3>
          <p>진행 예정 공모주 중심으로 정렬되어 보여집니다.</p>
          <span className="card-link">2026 캘린더 보기 →</span>
        </Link>
        <Link className="card" href="/ipo/market/">
          <h3>시장별 공모주</h3>
          <p>KOSPI/KOSDAQ 기준으로 종목을 탐색합니다.</p>
          <span className="card-link">시장별 보기 →</span>
        </Link>
        <Link className="card" href="/ipo/manager/">
          <h3>주관사별 공모주</h3>
          <p>증권사 기준으로 청약 가능 종목을 확인합니다.</p>
          <span className="card-link">주관사별 보기 →</span>
        </Link>
      </div>
    </div>
  );
}
