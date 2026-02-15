import type { Metadata } from 'next';
import Link from 'next/link';

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
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>공모주</span>
      </div>
      <h1 className="section-title">공모주 청약 캘린더</h1>
      <p className="section-description">
        AI 수집 데이터로 빠르게 갱신 가능한 스키마 기반 공모주 일정 허브입니다.
      </p>

      <section className="info-card" style={{ marginBottom: '1rem' }}>
        <h2>크롤링용 JSON 형식 (권장)</h2>
        <p>아래 스키마 기준으로 수집하면 페이지/SEO 반영이 안정적입니다.</p>
        <p>스키마 파일: <a href="/ipo-offering-schema.json" target="_blank" rel="noreferrer">/ipo-offering-schema.json</a></p>
        <ul>
          <li>필수: companyNameKo, market, status, subscriptionStartDate, subscriptionEndDate</li>
          <li>가격: offerPriceBand(min/max/currency), confirmedOfferPrice</li>
          <li>신뢰: sourceUrls, officialNoticeUrl, lastUpdatedAt</li>
        </ul>
      </section>

      <div className="card-grid">
        <Link className="card" href="/ipo/2026/">
          <h3>2026 공모주 일정</h3>
          <p>월별 청약 이슈와 기업별 상세 페이지를 확인하세요.</p>
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
