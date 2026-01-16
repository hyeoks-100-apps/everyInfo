import type { Metadata } from 'next';
import Link from 'next/link';
import { marathonEvents2026 } from '../../../data/marathon2026';

export const metadata: Metadata = {
  title: '2026 마라톤 대회 일정',
  description: '2026년에 예정된 마라톤 대회 일정과 기본 정보를 제공합니다.',
  alternates: {
    canonical: '/marathon/2026/',
  },
};

export default function Marathon2026Page() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/marathon/">마라톤</Link>
        <span>/</span>
        <span>2026</span>
      </div>
      <h1 className="section-title">2026 마라톤 대회 일정</h1>
      <p className="section-description">
        업데이트 예정인 일정은 예시 데이터로 제공됩니다. 공식 공지는 각 대회
        링크를 확인해주세요.
      </p>

      <div className="table-wrapper" role="region" aria-label="2026 마라톤 일정">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">대회명</th>
              <th scope="col">날짜</th>
              <th scope="col">지역</th>
              <th scope="col">링크</th>
              <th scope="col">비고</th>
            </tr>
          </thead>
          <tbody>
            {marathonEvents2026.map((event) => (
              <tr key={event.name}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>
                  <a href={event.link} aria-label={`${event.name} 공식 페이지`}>
                    방문하기
                  </a>
                </td>
                <td>{event.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
