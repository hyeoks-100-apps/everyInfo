'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { managerSlugify } from '../data/ipo';
import type { IpoOffering } from '../data/ipo2026';

type IpoScheduleSectionProps = {
  visible: IpoOffering[];
  hidden: IpoOffering[];
};

type SortDirection = 'asc' | 'desc';

const sortByDate = (offerings: IpoOffering[], direction: SortDirection) => {
  const sorted = [...offerings].sort(
    (left, right) =>
      new Date(left.subscriptionStartDate).getTime() -
      new Date(right.subscriptionStartDate).getTime()
  );

  return direction === 'asc' ? sorted : sorted.reverse();
};

export default function IpoScheduleSection({ visible, hidden }: IpoScheduleSectionProps) {
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const sortedVisible = useMemo(
    () => sortByDate(visible, sortDirection),
    [visible, sortDirection]
  );
  const sortedHidden = useMemo(
    () => sortByDate(hidden, sortDirection),
    [hidden, sortDirection]
  );

  return (
    <>
      <div className="ipo-sort-tabs" role="tablist" aria-label="날짜 정렬">
        <button
          type="button"
          role="tab"
          aria-selected={sortDirection === 'asc'}
          className={`ipo-sort-tab ${sortDirection === 'asc' ? 'is-active' : ''}`}
          onClick={() => setSortDirection('asc')}
        >
          빠른 날짜순 ↓
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={sortDirection === 'desc'}
          className={`ipo-sort-tab ${sortDirection === 'desc' ? 'is-active' : ''}`}
          onClick={() => setSortDirection('desc')}
        >
          늦은 날짜순 ↑
        </button>
      </div>

      {sortedVisible.length > 0 ? (
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
              {sortedVisible.map((ipo) => (
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

      {sortedHidden.length > 0 ? (
        <details className="info-card" style={{ marginTop: '1rem' }}>
          <summary>지난 일정 {sortedHidden.length}건 보기</summary>
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
                {sortedHidden.map((ipo) => (
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
    </>
  );
}
