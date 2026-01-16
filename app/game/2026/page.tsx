import type { Metadata } from 'next';
import Link from 'next/link';
import { gameRecommendations2026 } from '../../../data/game2026';

export const metadata: Metadata = {
  title: '2026 게임 추천',
  description: '2026년 주목할 게임 추천 리스트입니다.',
  alternates: {
    canonical: '/game/2026/',
  },
};

export default function Game2026Page() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/game/">게임</Link>
        <span>/</span>
        <span>2026</span>
      </div>
      <h1 className="section-title">2026 게임 추천</h1>
      <p className="section-description">
        출시 예정 및 기대작을 중심으로 구성한 예시 추천 리스트입니다.
      </p>

      <div className="list-grid">
        {gameRecommendations2026.map((game) => (
          <article key={game.title} className="info-card">
            <span className="tag">{game.genre}</span>
            <h3>{game.title}</h3>
            <p>{game.highlight}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
