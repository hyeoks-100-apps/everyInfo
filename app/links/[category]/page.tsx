import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { linkCollections } from '../../../data/linkCollections';

type LinksCategoryPageProps = {
  params: { category: string };
};

const getCategory = (slug: string) =>
  linkCollections.find((category) => category.id === slug);

export const generateStaticParams = () =>
  linkCollections.map((category) => ({ category: category.id }));

export const generateMetadata = ({ params }: LinksCategoryPageProps): Metadata => {
  const category = getCategory(params.category);
  if (!category) {
    return {
      title: '링크 모음',
    };
  }
  return {
    title: `${category.title} 링크 모음`,
    description: category.description,
    alternates: {
      canonical: `/links/${category.id}/`,
    },
    openGraph: {
      title: `${category.title} 링크 모음`,
      description: category.description,
      url: `/links/${category.id}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.title} 링크 모음`,
      description: category.description,
    },
  };
};

export default function LinksCategoryPage({ params }: LinksCategoryPageProps) {
  const category = getCategory(params.category);
  if (!category) {
    notFound();
  }

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/links/">링크 모음</Link>
        <span>/</span>
        <span>{category.title}</span>
      </div>

      <section className="links-detail-hero">
        <h1>{category.title} 링크 모음</h1>
        <p className="section-description">{category.description}</p>
        <div className="filter-summary">
          <span>
            총 <strong>{category.links.length}</strong>개 링크를 제공합니다.
          </span>
          <Link className="card-link" href="/links/">
            다른 카테고리 보기 →
          </Link>
        </div>
      </section>

      <section className="list-section">
        <div className="list-grid">
          {category.links.map((item) => (
            <a
              key={item.name}
              className="card"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="popular-card-header">
                <span className="chip-lite">{category.title}</span>
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
      </section>
    </div>
  );
}
