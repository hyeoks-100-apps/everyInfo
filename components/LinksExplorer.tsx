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

  const filteredCategories = useMemo(
    () =>
      categories
        .map((category) => ({
          ...category,
          links: category.links.filter((item) => matchesQuery(item, query)),
        }))
        .filter((category) => category.links.length > 0),
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
              <button
                className="filter-reset"
                type="button"
                onClick={() => setQuery('')}
                disabled={!query}
              >
                검색 초기화
              </button>
            </div>
            <p className="search-helper">
              총 {categories.length}개 카테고리 · {totalLinks}개 사이트 제공
            </p>
          </div>
        </div>
      </section>

      <section className="links-category-nav">
        <h2 className="section-title">카테고리 홈</h2>
        <p className="section-description">
          각 카테고리로 바로 이동해 원하는 사이트를 빠르게 찾아보세요.
        </p>
        <div className="card-grid">
          {categories.map((category) => (
            <a key={category.id} className="card" href={`#${category.id}`}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <span className="card-link">{category.links.length}개 링크 보기 →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="links-popular">
        <h2 className="section-title">인기 사이트</h2>
        <p className="section-description">
          방문이 많은 대표 서비스만 먼저 모아서 보여드립니다.
        </p>
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

      <section className="links-results">
        <div className="results-header">
          <div>
            <h2 className="section-title">카테고리별 링크</h2>
            <p className="section-description">
              {query
                ? `검색 결과 ${filteredCategories.length}개 카테고리에서 확인됩니다.`
                : '모든 카테고리 링크를 정리했습니다.'}
            </p>
          </div>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="empty-state">
            <h3>검색 결과가 없습니다.</h3>
            <p>다른 키워드로 다시 검색해보세요.</p>
            <button className="filter-reset" type="button" onClick={() => setQuery('')}>
              검색 초기화
            </button>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <section key={category.id} id={category.id} className="list-section">
              <div>
                <h3 className="section-title">{category.title}</h3>
                <p className="section-description">{category.description}</p>
              </div>
              <div className="list-grid">
                {category.links.map((item) => (
                  <a
                    key={item.name}
                    className="card"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>{item.name}</h4>
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
          ))
        )}
      </section>
    </div>
  );
}
