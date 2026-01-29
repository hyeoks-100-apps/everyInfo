'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { LinkCategory } from '../data/linkCollections';

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

  const hasQuery = query.trim().length > 0;

  return (
    <div className="links-page">
      <section className="links-hero">
        <div className="links-hero-content">
          <div>
            <p className="links-hero-pill">주소 모음</p>
            <h1>카테고리별 인기 사이트 주소를 한 곳에서</h1>
            <p>
              웹툰, OTT, 스포츠, 커뮤니티 등 자주 찾는 서비스를 빠르게
              북마크하세요. 원하는 이름이나 태그로 검색할 수 있습니다.
            </p>
            <div className="links-hero-tags" aria-label="추천 검색 태그">
              {quickTags.map((tag) => (
                <Link
                  key={tag}
                  className="chip chip-lite"
                  href={`/links/search?query=${encodeURIComponent(tag)}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div className="links-hero-search">
            <label className="search-label" htmlFor="links-search">
              사이트 검색
            </label>
            <form className="search-bar" action="/links/search" method="get">
              <input
                id="links-search"
                className="search-input"
                type="search"
                name="query"
                placeholder="사이트 이름 또는 태그로 검색..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <button className="search-submit" type="submit" aria-label="검색 실행">
                검색
              </button>
            </form>
            <div className="search-meta">
              <p className="search-helper">
                총 {categories.length}개 카테고리 · {totalLinks}개 사이트 제공
              </p>
              {hasQuery ? (
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

    </div>
  );
}
