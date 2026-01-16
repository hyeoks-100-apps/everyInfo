'use client';

import { useMemo, useState } from 'react';
import { marathonEvents2026 } from '../data/marathon2026';

const allEvents = marathonEvents2026.map((event) => ({
  ...event,
  year: event.date.slice(0, 4),
  month: event.date.slice(5, 7),
}));

const sortByDate = (a: (typeof allEvents)[number], b: (typeof allEvents)[number]) =>
  a.date.localeCompare(b.date);

export default function MarathonList() {
  const [region, setRegion] = useState('전체');
  const [distance, setDistance] = useState('전체');
  const [month, setMonth] = useState('전체');
  const [query, setQuery] = useState('');

  const regionOptions = useMemo(() => {
    const regions = Array.from(new Set(allEvents.map((event) => event.location)));
    return ['전체', ...regions];
  }, []);

  const distanceOptions = useMemo(() => {
    const distances = Array.from(
      new Set(allEvents.flatMap((event) => event.distances))
    );
    return ['전체', ...distances];
  }, []);

  const monthOptions = useMemo(() => {
    const months = Array.from(new Set(allEvents.map((event) => event.month)));
    return ['전체', ...months.sort()];
  }, []);

  const filteredEvents = useMemo(() => {
    return allEvents
      .filter((event) => (region === '전체' ? true : event.location === region))
      .filter((event) =>
        distance === '전체' ? true : event.distances.includes(distance)
      )
      .filter((event) => (month === '전체' ? true : event.month === month))
      .filter((event) =>
        query.trim() === ''
          ? true
          : event.name.toLowerCase().includes(query.trim().toLowerCase())
      )
      .sort(sortByDate);
  }, [region, distance, month, query]);

  const summary = `${filteredEvents.length}개 일정`;

  const handleReset = () => {
    setRegion('전체');
    setDistance('전체');
    setMonth('전체');
    setQuery('');
  };

  return (
    <section className="list-section">
      <div className="filter-panel">
        <div className="filter-grid">
          <label className="filter-field">
            <span className="filter-label">지역</span>
            <select
              className="filter-select"
              value={region}
              onChange={(event) => setRegion(event.target.value)}
            >
              {regionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="filter-field">
            <span className="filter-label">코스</span>
            <select
              className="filter-select"
              value={distance}
              onChange={(event) => setDistance(event.target.value)}
            >
              {distanceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="filter-field">
            <span className="filter-label">월</span>
            <select
              className="filter-select"
              value={month}
              onChange={(event) => setMonth(event.target.value)}
            >
              {monthOptions.map((option) => (
                <option key={option} value={option}>
                  {option}월
                </option>
              ))}
            </select>
          </label>
          <label className="filter-field">
            <span className="filter-label">대회 검색</span>
            <input
              className="filter-input"
              type="search"
              placeholder="대회명을 입력하세요"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>
        <div className="filter-summary">
          <span>{summary}</span>
          <button className="filter-reset" type="button" onClick={handleReset}>
            필터 초기화
          </button>
        </div>
      </div>

      <div className="list-grid">
        {filteredEvents.map((event) => (
          <article className="info-card" key={`${event.name}-${event.date}`}>
            <div className="info-card-header">
              <h3>{event.name}</h3>
              <span className="tag">{event.year}</span>
            </div>
            <span>{event.date}</span>
            <p className="info-card-meta">
              {event.location} · {event.distances.join(', ')}
            </p>
            <p>{event.note}</p>
            <a className="card-link" href={event.link}>
              공식 페이지 →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
