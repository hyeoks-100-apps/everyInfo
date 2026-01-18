import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '../../../../data/cosmetics/products';
import {
  categoryGroups,
  concernOptions,
  freeFromOptions,
  personalColorOptions,
  skinTypeOptions,
  textureOptions,
  undertoneOptions,
} from '../../../../data/cosmetics/filterOptions';

type PageProps = {
  params: {
    slug: string;
  };
};

const categoryLabelMap = categoryGroups
  .flatMap((group) => group.options)
  .reduce<Record<string, string>>((acc, option) => {
    acc[option.value] = option.label;
    return acc;
  }, {});

const mapOptions = (options: Array<{ value: string; label: string }>) =>
  options.reduce<Record<string, string>>((acc, option) => {
    acc[option.value] = option.label;
    return acc;
  }, {});

const skinTypeLabelMap = mapOptions(skinTypeOptions);
const concernLabelMap = mapOptions(concernOptions);
const personalColorLabelMap = mapOptions(personalColorOptions);
const undertoneLabelMap = mapOptions(undertoneOptions);
const textureLabelMap = mapOptions(textureOptions);
const freeFromLabelMap = mapOptions(freeFromOptions);

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return {
      title: '제품을 찾을 수 없습니다',
    };
  }
  return {
    title: `${product.nameKo} - ${product.brandKo}`,
    description: product.descriptionKo ?? '화장품 상세 정보를 확인하세요.',
    alternates: {
      canonical: `/cosmetics/product/${product.slug}/`,
    },
  };
};

export default function CosmeticsProductPage({ params }: PageProps) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.slug !== product.slug && item.category.main === product.category.main
    )
    .slice(0, 4);

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/cosmetics/">화장품</Link>
        <span>/</span>
        <span>{product.nameKo}</span>
      </div>
      <div className="product-detail">
        <div className="product-detail-header">
          <span className="tag">
            {product.category.main === 'skincare'
              ? '스킨케어'
              : product.category.main === 'makeup'
              ? '메이크업'
              : '바디/헤어'}
          </span>
          <h1>{product.nameKo}</h1>
          <p className="brand">{product.brandKo}</p>
          <p className="price">
            {new Intl.NumberFormat('ko-KR').format(product.price.amount)}원
          </p>
          <p className="category-label">
            {categoryLabelMap[product.category.sub] ?? product.category.sub}
          </p>
          {product.descriptionKo && (
            <p className="section-description">{product.descriptionKo}</p>
          )}
        </div>

        <section className="detail-section">
          <h2>핵심 태그</h2>
          <div className="chip-row">
            {(product.skinTypes ?? []).map((item) => (
              <span key={item} className="chip-lite">
                {skinTypeLabelMap[item] ?? item}
              </span>
            ))}
            {(product.concerns ?? []).map((item) => (
              <span key={item} className="chip-lite">
                {concernLabelMap[item] ?? item}
              </span>
            ))}
            {(product.personalColor ?? []).map((item) => (
              <span key={item} className="chip-lite">
                {personalColorLabelMap[item] ?? item}
              </span>
            ))}
            {(product.undertone ?? []).map((item) => (
              <span key={item} className="chip-lite">
                {undertoneLabelMap[item] ?? item}
              </span>
            ))}
            {(product.textures ?? []).map((item) => (
              <span key={item} className="chip-lite">
                {textureLabelMap[item] ?? item}
              </span>
            ))}
            {(product.freeFrom ?? []).map((item) => (
              <span key={item} className="chip-lite">
                {freeFromLabelMap[item] ?? item}
              </span>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h2>핵심 성분</h2>
          <ul className="detail-list">
            {(product.keyIngredientsKo ?? ['-']).map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Free-from</h2>
          <ul className="detail-list">
            {(product.freeFrom ?? ['-']).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>사용 팁</h2>
          <ul className="detail-list">
            {(product.tipsKo ?? ['-']).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>참고사항</h2>
          <ul className="detail-list">
            {(product.cautionsKo ?? ['패치 테스트 후 사용을 권장합니다.']).map(
              (item) => (
                <li key={item}>{item}</li>
              )
            )}
          </ul>
        </section>

        {relatedProducts.length > 0 && (
          <section className="detail-section">
            <h2>관련 제품</h2>
            <div className="card-grid">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  className="card"
                  href={`/cosmetics/product/${item.slug}`}
                >
                  <h3>{item.nameKo}</h3>
                  <p>{item.brandKo}</p>
                  <span className="card-link">자세히 보기 →</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
