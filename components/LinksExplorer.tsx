'use client';

import { useMemo, useState } from 'react';
import type { LinkCategory, LinkItem } from '../data/linkCollections';

const normalize = (value: string) => value.toLowerCase().trim();

const matchesQuery = (item: LinkItem, query: string) => {
  const keyword = normalize(query);
  if (!keyword) {
    return true;
  }
  return (
    normalize(item.name).includes(keyword) ||
    normalize(item.description).includes(keyword) ||
    item.tags.some((tag) => normalize(tag).includes(keyword))
  );
};

type LinksExplorerProps = {
  categories: LinkCategory[];
};

const quickTags = ['웹툰', 'OTT', '스포츠', '커뮤니티', '쇼핑', '학습'];

export default function LinksExplorer({ categories }: LinksExplorerProps) {
  const [query, setQuery] = useState('');

  const totalLinks = useMemo(
    () => categories.reduce((sum, category) => sum + category.links.length, 0),
    [categories],
  );

  const popularLinks = useMemo(
    () =>
      categories
        .flatMap((category) =>
          category.links.map((link) => ({ ...link, categoryTitle: category.title })),
        )
        .filter((link) => link.isPopular)
        .slice(0, 8),
    [categories],
  );

  const filteredLinks = useMemo(
    () =>
      categories
        .flatMap((category) =>
          category.links.map((link) => ({ ...link, categoryTitle: category.title })),
        )
        .filter((link) => matchesQuery(link, query)),
    [categories, query],
  );

  return (
    <div className="links-page">
      <section className="links-hero">
        <div className="links-hero-content">
          <div>
            <p className="links-hero-pill">링크 모음</p>
            <h1>카테고리별 인기 사이트를 한 곳에서</h1>
            <p>
              웹툰, OTT, 스포츠, 커뮤니티 등 자주 찾는 서비스를 빠르게
              북마크하세요. 원하는 이름이나 태그로 검색할 수 있습니다.
            </p>
            <div className="links-hero-tags" aria-label="추천 검색 태그">
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="chip chip-lite"
                  onClick={() => setQuery(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="links-hero-search">
            <label className="search-label" htmlFor="links-search">
              사이트 검색
            </label>
            <div className="search-bar">
              <input
                id="links-search"
                className="search-input"
                type="search"
                placeholder="사이트 이름 또는 태그로 검색..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button className="search-submit" type="button" aria-label="검색 실행">
                검색
              </button>
            </div>
            <div className="search-meta">
              <p className="search-helper">
                총 {categories.length}개 카테고리 · {totalLinks}개 사이트 제공
              </p>
              {query ? (
                <button className="link-reset" type="button" onClick={() => setQuery('')}>
                  검색 초기화
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="links-popular section-panel">
        <div className="section-heading">
          <div>
            <h2 className="section-title">인기 사이트</h2>
            <p className="section-description">
              방문이 많은 대표 서비스만 먼저 모아서 보여드립니다.
            </p>
          </div>
          <span className="section-badge">TOP 8</span>
        </div>
        <div className="list-grid">
          {popularLinks.map((item) => (
            <a
              key={item.name}
              className="card popular-card"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="popular-card-header">
                <span className="chip-lite">{item.categoryTitle}</span>
                <span className="tag">인기</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span key={tag} className="chip-lite">
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="card-link">바로가기 →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="links-category-nav section-panel">
        <h2 className="section-title">카테고리별 링크 보러 가기</h2>
        <p className="section-description">
          각 카테고리 상세 페이지에서 링크를 모아서 볼 수 있습니다.
        </p>
        <div className="card-grid">
          {categories.map((category) => (
            <a key={category.id} className="card" href={`/links/${category.id}/`}>
              <span className="card-count">{category.links.length}개 링크</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="card-link">{category.links.length}개 링크 보기 →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="links-results section-panel">
        <div className="results-header">
          <div>
            <h2 className="section-title">검색 결과</h2>
            <p className="section-description">
              {query ? `총 ${filteredLinks.length}개의 사이트가 검색됩니다.` : '검색어를 입력해 주세요.'}
            </p>
          </div>
          {query ? (
            <span className="tag">검색 중</span>
          ) : (
            <span className="chip-lite">미입력</span>
          )}
        </div>

        {!query ? (
          <div className="empty-state">
            <h3>원하는 사이트를 검색해보세요.</h3>
            <p>검색 결과는 이 영역에 표시됩니다.</p>
          </div>
        ) : filteredLinks.length === 0 ? (
          <div className="empty-state">
            <h3>검색 결과가 없습니다.</h3>
            <p>다른 키워드로 다시 검색해보세요.</p>
            <button className="filter-reset" type="button" onClick={() => setQuery('')}>
              검색 초기화
            </button>
          </div>
        ) : (
          <div className="list-grid">
            {filteredLinks.map((item) => (
              <a
                key={`${item.categoryTitle}-${item.name}`}
                className="card"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="popular-card-header">
                  <span className="chip-lite">{item.categoryTitle}</span>
                  {item.isPopular ? <span className="tag">인기</span> : null}
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="chip-lite">
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="card-link">바로가기 →</span>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
