import type { Metadata } from 'next';
import Link from 'next/link';
import { ipoManagers } from '../../../data/ipo';

export const metadata: Metadata = {
  title: '주관사별 공모주',
  description: '증권사(주관사)별로 공모주 청약 가능 종목을 확인합니다.',
  alternates: {
    canonical: '/ipo/manager/',
  },
};

export default function IpoManagerIndexPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/ipo/">공모주</Link>
        <span>/</span>
        <span>주관사별</span>
      </div>
      <h1 className="section-title">주관사별 공모주</h1>
      <p className="section-description">증권사별 청약 가능 종목을 모아 제공합니다.</p>

      <div className="list-grid">
        {ipoManagers.map((manager) => (
          <Link key={manager.slug} className="card" href={`/ipo/manager/${manager.slug}/`}>
            <h3>{manager.name}</h3>
            <span className="card-link">주관 종목 보기 →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
