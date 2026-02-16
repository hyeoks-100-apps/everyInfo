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

type MarketFilter = 'ALL' | IpoOffering['market'];

const sortByDate = (offerings: IpoOffering[], direction: SortDirection) => {
  const sorted = [...offerings].sort(
    (left, right) =>
      new Date(left.subscriptionStartDate).getTime() -
      new Date(right.subscriptionStartDate).getTime()
  );

  return direction === 'asc' ? sorted : sorted.reverse();
};

const matchesFilter = (offering: IpoOffering, query: string, market: MarketFilter) => {
  const normalizedQuery = query.trim().toLowerCase();
  const matchesQuery =
    !normalizedQuery ||
    offering.companyNameKo.toLowerCase().includes(normalizedQuery) ||
    offering.slug.toLowerCase().includes(normalizedQuery);

  const matchesMarket = market === 'ALL' || offering.market === market;

  return matchesQuery && matchesMarket;
};

export default function IpoScheduleSection({ visible, hidden }: IpoScheduleSectionProps) {
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [marketFilter, setMarketFilter] = useState<MarketFilter>('ALL');
  const [query, setQuery] = useState('');

  const marketOptions = useMemo(
    () =>
      Array.from(new Set([...visible, ...hidden].map((offering) => offering.market))).sort((a, b) =>
        a.localeCompare(b)
      ),
    [visible, hidden]
  );

  const sortedVisible = useMemo(
    () =>
      sortByDate(visible, sortDirection).filter((offering) =>
        matchesFilter(offering, query, marketFilter)
      ),
    [visible, sortDirection, marketFilter, query]
  );

  const sortedHidden = useMemo(
    () =>
      sortByDate(hidden, sortDirection).filter((offering) =>
        matchesFilter(offering, query, marketFilter)
      ),
    [hidden, sortDirection, marketFilter, query]
  );

  const resetFilter = () => {
    setSortDirection('asc');
    setMarketFilter('ALL');
    setQuery('');
  };

  return (
    <>
      <section className="ipo-filter-panel" aria-label="공모주 일정 필터">
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

        <div className="ipo-filter-row">
          <label className="ipo-filter-field">
            <span>종목 검색</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="기업명 또는 슬러그 입력"
            />
          </label>
          <label className="ipo-filter-field">
            <span>시장</span>
            <select
              value={marketFilter}
              onChange={(event) => setMarketFilter(event.target.value as MarketFilter)}
            >
              <option value="ALL">전체</option>
              {marketOptions.map((market) => (
                <option key={market} value={market}>
                  {market}
                </option>
              ))}
            </select>
          </label>
          <button type="button" className="ipo-reset-button" onClick={resetFilter}>
            필터 초기화
          </button>
        </div>

        <p className="ipo-filter-summary">
          진행 예정 <strong>{sortedVisible.length}건</strong> · 지난 일정{' '}
          <strong>{sortedHidden.length}건</strong>
        </p>
      </section>

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
        <div className="info-card">필터 조건에 맞는 진행 예정 공모주가 없습니다.</div>
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
