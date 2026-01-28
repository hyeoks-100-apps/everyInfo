import type { Metadata } from 'next';
import Link from 'next/link';
import { linkCollections } from '../../../data/linkCollections';

const normalize = (value: string) => value.toLowerCase().trim();

const matchesQuery = (value: string, query: string) =>
  normalize(value).includes(normalize(query));

export const generateMetadata = ({
  searchParams,
}: {
  searchParams?: { query?: string };
}): Metadata => {
  const keyword = searchParams?.query?.trim();
  const title = keyword ? `"${keyword}" 주소 모음 검색 결과` : '주소 모음 검색';
  const description = keyword
    ? `"${keyword}" 관련 사이트 주소를 확인하세요.`
    : '주소 모음에서 원하는 사이트를 검색하세요.';
  return {
    title,
    description,
    alternates: {
      canonical: '/links/search/',
    },
  };
};

export default function LinksSearchPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query?.trim() ?? '';
  const hasQuery = query.length > 0;

  const results = linkCollections
    .flatMap((category) =>
      category.links.map((link) => ({ ...link, categoryTitle: category.title }))
    )
    .filter((link) => {
      if (!hasQuery) {
        return false;
      }
      return (
        matchesQuery(link.name, query) ||
        matchesQuery(link.description, query) ||
        link.tags.some((tag) => matchesQuery(tag, query))
      );
    });

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/links/">주소 모음</Link>
        <span>/</span>
        <span>검색</span>
      </div>

      <section className="section-panel">
        <div className="section-heading">
          <div>
            <h1 className="section-title">검색 결과</h1>
            <p className="section-description">
              {hasQuery
                ? `"${query}"에 대한 ${results.length}개의 사이트가 검색됩니다.`
                : '검색어를 입력하고 다시 시도해 주세요.'}
            </p>
          </div>
          {hasQuery ? <span className="tag">검색 중</span> : <span className="chip-lite">미입력</span>}
        </div>

        {!hasQuery ? (
          <div className="empty-state">
            <h3>검색어가 비어 있습니다.</h3>
            <p>상단 검색창에서 키워드를 입력해 주세요.</p>
            <Link className="card-link" href="/links/">
              주소 모음으로 돌아가기 →
            </Link>
          </div>
        ) : results.length === 0 ? (
          <div className="empty-state">
            <h3>검색 결과가 없습니다.</h3>
            <p>다른 키워드로 다시 검색해보세요.</p>
            <Link className="card-link" href="/links/">
              주소 모음으로 돌아가기 →
            </Link>
          </div>
        ) : (
          <div className="list-grid">
            {results.map((item) => (
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
