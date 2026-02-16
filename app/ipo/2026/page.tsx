import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getIpoByYear,
  managerSlugify,
  splitOfferingsByVisibility,
} from '../../../data/ipo';

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
  const offerings = getIpoByYear('2026');
  const { visible, hidden } = splitOfferingsByVisibility(offerings);

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
        진행 예정·진행중인 일정만 우선 노출됩니다. 마감 일정은 아래 접기 섹션에서 확인할 수 있습니다.
      </p>

      {visible.length > 0 ? (
        <div className="table-wrapper" role="region" aria-label="2026 진행 예정 공모주 청약 일정">
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
              {visible.map((ipo) => (
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
                      <span key={`${ipo.id}-${manager}`}>
                        {index > 0 ? ', ' : ''}
                        {manager === '미정' ? (
                          manager
                        ) : (
                          <Link href={`/ipo/manager/${managerSlugify(manager)}/`}>{manager}</Link>
                        )}
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
      ) : (
        <div className="info-card">현재 노출 가능한 진행 예정 공모주가 없습니다.</div>
      )}

      {hidden.length > 0 ? (
        <details className="info-card" style={{ marginTop: '1rem' }}>
          <summary>지난 일정 {hidden.length}건 보기</summary>
          <div className="table-wrapper" style={{ marginTop: '1rem' }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">기업명</th>
                  <th scope="col">상태</th>
                  <th scope="col">청약일</th>
                  <th scope="col">상세</th>
                </tr>
              </thead>
              <tbody>
                {hidden.map((ipo) => (
                  <tr key={`${ipo.id}-hidden`}>
                    <td>{ipo.companyNameKo}</td>
                    <td>{ipo.status}</td>
                    <td>
                      {ipo.subscriptionStartDate} ~ {ipo.subscriptionEndDate}
                    </td>
                    <td>
                      <Link href={`/ipo/company/${ipo.slug}/`}>상세 보기</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      ) : null}
    </div>
  );
}
