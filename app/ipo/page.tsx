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
    <div className="ipo-home">
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>공모주</span>
      </div>

      <section className="ipo-home-hero">
        <span className="section-badge">IPO INSIGHT</span>
        <h1 className="section-title">공모주 청약 캘린더</h1>
        <p className="section-description">
          복잡한 청약 일정을 한 화면에서 정리해 보여드립니다. 진행 예정 공모주를 우선 노출하고,
          지난 일정은 별도로 확인할 수 있게 구성했습니다.
        </p>

        <div className="ipo-kpi-grid" role="list" aria-label="공모주 현황 요약">
          <article className="ipo-kpi-card" role="listitem">
            <span className="ipo-kpi-label">2026 진행 예정</span>
            <strong className="ipo-kpi-value">{upcoming2026.length}건</strong>
            <p>청약 예정/진행 중인 종목</p>
          </article>
          <article className="ipo-kpi-card" role="listitem">
            <span className="ipo-kpi-label">2026 지난 일정</span>
            <strong className="ipo-kpi-value">{hidden.length}건</strong>
            <p>마감 또는 상장 완료 종목</p>
          </article>
        </div>
      </section>

      <section className="section-panel">
        <div className="section-heading">
          <div>
            <h2 className="section-title">서비스 안내</h2>
            <p className="section-description">실제 사용 흐름에 맞춰 정보 탐색 경로를 준비했습니다.</p>
          </div>
        </div>
        <ul className="ipo-guide-list">
          <li>기본 목록에는 진행 예정/진행중인 일정만 우선 노출됩니다.</li>
          <li>마감/상장 완료된 종목은 각 페이지 하단 “지난 일정”에서 확인할 수 있습니다.</li>
          <li>투자 전에는 반드시 공시/DART와 주관사 공지를 최종 확인하세요.</li>
        </ul>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <h2 className="section-title">바로가기</h2>
            <p className="section-description">원하는 탐색 방식으로 빠르게 진입하세요.</p>
          </div>
        </div>
        <div className="card-grid">
          <Link className="card ipo-entry-card" href="/ipo/2026/">
            <span className="ipo-entry-icon" aria-hidden="true">
              📅
            </span>
            <h3>2026 공모주 일정</h3>
            <p>진행 예정 공모주 중심으로 정렬되어 보여집니다.</p>
            <span className="card-link">2026 캘린더 보기 →</span>
          </Link>
          <Link className="card ipo-entry-card" href="/ipo/market/">
            <span className="ipo-entry-icon" aria-hidden="true">
              🏛️
            </span>
            <h3>시장별 공모주</h3>
            <p>KOSPI/KOSDAQ 기준으로 종목을 탐색합니다.</p>
            <span className="card-link">시장별 보기 →</span>
          </Link>
          <Link className="card ipo-entry-card" href="/ipo/manager/">
            <span className="ipo-entry-icon" aria-hidden="true">
              🧭
            </span>
            <h3>주관사별 공모주</h3>
            <p>증권사 기준으로 청약 가능 종목을 확인합니다.</p>
            <span className="card-link">주관사별 보기 →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
