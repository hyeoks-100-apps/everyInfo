import type { Metadata } from 'next';
import Link from 'next/link';
import { ipoOfferings, managerSlugify } from '../../../data/ipo';

export const metadata: Metadata = {
  title: '2026 공모주 청약 일정',
  description: '2026년 공모주 청약 일정과 핵심 지표를 정리합니다.',
  keywords: ['2026 공모주', 'IPO 일정', '청약 일정', '주관사별 공모주'],
  alternates: {
    canonical: '/ipo/2026/',
  },
  openGraph: {
    title: '2026 공모주 청약 일정',
    description: '2026년 공모주 청약 일정과 핵심 지표를 정리합니다.',
    url: '/ipo/2026/',
  },
};

export default function Ipo2026Page() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/ipo/">공모주</Link>
        <span>/</span>
        <span>2026</span>
      </div>
      <h1 className="section-title">2026 공모주 청약 일정</h1>
      <p className="section-description">
        모든 데이터는 투자 참고용 예시입니다. 실제 투자 전 공시를 반드시 확인하세요.
      </p>

      <div className="table-wrapper" role="region" aria-label="2026 공모주 청약 일정">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">기업명</th>
              <th scope="col">시장</th>
              <th scope="col">청약일</th>
              <th scope="col">주관사</th>
              <th scope="col">희망공모가</th>
              <th scope="col">상세</th>
            </tr>
          </thead>
          <tbody>
            {ipoOfferings.map((ipo) => (
              <tr key={ipo.id}>
                <td>{ipo.companyNameKo}</td>
                <td>
                  <Link href={`/ipo/market/${ipo.market.toLowerCase()}/`}>{ipo.market}</Link>
                </td>
                <td>
                  {ipo.subscriptionStartDate} ~ {ipo.subscriptionEndDate}
                </td>
                <td>
                  {ipo.leadManagers.map((manager, index) => (
                    <span key={manager}>
                      {index > 0 ? ', ' : ''}
                      <Link href={`/ipo/manager/${managerSlugify(manager)}/`}>
                        {manager}
                      </Link>
                    </span>
                  ))}
                </td>
                <td>
                  {ipo.offerPriceBand.min.toLocaleString()}원 ~{' '}
                  {ipo.offerPriceBand.max.toLocaleString()}원
                </td>
                <td>
                  <Link href={`/ipo/company/${ipo.slug}/`}>상세 보기</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
