import type { Metadata } from 'next';
import Link from 'next/link';
import { ipoMarkets } from '../../../data/ipo';

export const metadata: Metadata = {
  title: '시장별 공모주',
  description: 'KOSPI/KOSDAQ 등 시장별 공모주 청약 종목을 모아봅니다.',
  alternates: {
    canonical: '/ipo/market/',
  },
};

export default function IpoMarketIndexPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/ipo/">공모주</Link>
        <span>/</span>
        <span>시장별</span>
      </div>
      <h1 className="section-title">시장별 공모주</h1>
      <p className="section-description">시장 단위로 공모주 일정을 빠르게 탐색하세요.</p>

      <div className="card-grid">
        {ipoMarkets.map((market) => (
          <Link key={market} className="card" href={`/ipo/market/${market.toLowerCase()}/`}>
            <h3>{market}</h3>
            <p>{market} 시장의 공모주 종목을 확인합니다.</p>
            <span className="card-link">바로 보기 →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
