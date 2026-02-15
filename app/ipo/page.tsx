import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '공모주 청약 캘린더',
  description: '연도별 공모주 청약 일정과 핵심 지표를 한눈에 확인합니다.',
  alternates: {
    canonical: '/ipo/',
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
        <h2>필수 데이터 형식</h2>
        <ul>
          <li>회사명, 시장(KOSPI/KOSDAQ), 업종</li>
          <li>청약 시작일/종료일, 환불일, 상장일</li>
          <li>희망 공모가 밴드, 확정 공모가, 경쟁률</li>
          <li>대표 주관사, 최소 청약 수량/증거금</li>
          <li>공식 공시·안내 URL, 최종 업데이트 일시</li>
        </ul>
      </section>

      <div className="card-grid">
        <Link className="card" href="/ipo/2026/">
          <h3>2026 공모주 일정</h3>
          <p>월별 청약 이슈와 기업별 상세 페이지를 확인하세요.</p>
          <span className="card-link">2026 캘린더 보기 →</span>
        </Link>
      </div>
    </div>
  );
}
