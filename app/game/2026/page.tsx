import type { Metadata } from 'next';
import Link from 'next/link';
import { gameSchedule2026 } from '../../../data/game2026';

export const metadata: Metadata = {
  title: '2026 게임 출시 일정',
  description: '2026년 분기별 게임 출시 예정 정보를 정리했습니다.',
  alternates: {
    canonical: '/game/2026/',
  },
};

export default function Game2026Page() {
  const schedule = gameSchedule2026.find((item) => item.year === 2026);

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/game/">게임</Link>
        <span>/</span>
        <span>2026</span>
      </div>
      <h1 className="section-title">2026 게임 출시 일정</h1>
      <p className="section-description">
        분기별 출시 예정 정보를 정리했습니다. 정확한 일정은 공식 페이지를
        확인해주세요.
      </p>

      {schedule ? (
        schedule.quarters.map((quarter) => (
          <section key={quarter.quarter} className="list-section">
            <div className="info-card">
              <div className="info-card-header">
                <h2>
                  {schedule.year} {quarter.quarter}
                </h2>
                <span className="tag">
                  {quarter.start} ~ {quarter.end}
                </span>
              </div>
              <p className="info-card-meta">
                총 {quarter.games.length}개 출시 예정
              </p>
            </div>

            <div
              className="table-wrapper table-wrapper--elevated"
              role="region"
              aria-label={`${schedule.year} ${quarter.quarter} 게임 출시 일정`}
            >
              <table className="table table--compact">
                <thead>
                  <tr>
                    <th scope="col">게임</th>
                    <th scope="col">출시일</th>
                    <th scope="col">플랫폼</th>
                    <th scope="col">상태</th>
                    <th scope="col">태그</th>
                    <th scope="col">링크</th>
                  </tr>
                </thead>
                <tbody>
                  {quarter.games.map((game) => {
                    const tags =
                      game.tags?.filter((tag) => tag !== '-') ?? [];
                    const secondaryTitle =
                      game.titleKo !== '-' ? game.titleEn : game.titleKo;

                    return (
                      <tr key={game.id}>
                        <td>
                          <strong>
                            {game.titleKo !== '-' ? game.titleKo : game.titleEn}
                          </strong>
                          {secondaryTitle && secondaryTitle !== '-' && (
                            <div className="info-card-meta">
                              {secondaryTitle}
                            </div>
                          )}
                          <div className="info-card-meta">
                            {game.publisher}
                          </div>
                        </td>
                        <td>{game.releaseDate}</td>
                        <td>{game.platforms.join(', ')}</td>
                        <td>
                          <span className="tag">{game.releaseStatus}</span>
                        </td>
                        <td>
                          <div className="tag-row">
                            {tags.length > 0
                              ? tags.map((tag) => (
                                  <span key={tag} className="tag">
                                    {tag}
                                  </span>
                                ))
                              : '-'}
                          </div>
                        </td>
                        <td>
                          <div className="tag-row">
                            {game.storeLinks.map((link, index) => (
                              <a
                                key={link}
                                href={link}
                                aria-label={`${game.titleEn} 스토어 링크 ${
                                  index + 1
                                }`}
                              >
                                링크 {index + 1}
                              </a>
                            ))}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        ))
      ) : (
        <div className="empty-state">
          <p>2026년 게임 일정 데이터가 아직 준비되지 않았습니다.</p>
        </div>
      )}
    </div>
  );
}
