import type { Metadata } from 'next';
import Link from 'next/link';
import { linkCollections } from '../../data/linkCollections';

export const metadata: Metadata = {
  title: '링크 모음',
  description: '웹툰, OTT, 스포츠, 커뮤니티 등 인기 서비스를 카테고리별로 정리했습니다.',
  alternates: {
    canonical: '/links/',
  },
};

const totalLinks = linkCollections.reduce((sum, category) => sum + category.links.length, 0);

export default function LinksPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>링크 모음</span>
      </div>

      <section className="hero">
        <h1>링크 모음</h1>
        <p>
          자주 찾는 서비스와 콘텐츠를 한 곳에 모았습니다. 웹툰, OTT, 스포츠,
          커뮤니티 등 카테고리별로 빠르게 이동할 수 있어요.
        </p>
        <div className="filter-summary">
          <span>
            총 <strong>{linkCollections.length}</strong>개 카테고리,
            <strong> {totalLinks}</strong>개 링크를 제공합니다.
          </span>
          <span>북마크할 링크는 카테고리별 섹션에서 확인하세요.</span>
        </div>
      </section>

      <section>
        <h2 className="section-title">카테고리 바로가기</h2>
        <p className="section-description">
          관심 있는 카테고리를 선택해 아래 섹션으로 빠르게 이동합니다.
        </p>
        <div className="subtabs" role="navigation" aria-label="링크 카테고리">
          {linkCollections.map((category) => (
            <a key={category.id} className="subtab" href={`#${category.id}`}>
              {category.title}
            </a>
          ))}
        </div>
      </section>

      {linkCollections.map((category) => (
        <section key={category.id} id={category.id} className="list-section">
          <div>
            <h2 className="section-title">{category.title}</h2>
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
      ))}
    </div>
  );
}
