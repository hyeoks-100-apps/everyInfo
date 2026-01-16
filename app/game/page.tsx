import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '게임 추천',
  description: '연도별 게임 추천 리스트를 제공합니다.',
  alternates: {
    canonical: '/game/',
  },
};

export default function GameIndexPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>게임</span>
      </div>
      <h1 className="section-title">게임 추천</h1>
      <p className="section-description">
        트렌드 기반 추천 게임을 연도별로 확인하세요.
      </p>
      <div className="card-grid">
        <Link className="card" href="/game/2026/">
          <h3>2026 게임 추천</h3>
          <p>주목할 만한 타이틀을 모아 소개합니다.</p>
          <span className="card-link">2026 추천 보기 →</span>
        </Link>
      </div>
    </div>
  );
}
