import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getIpoBySlug, ipoOfferings, managerSlugify } from '../../../../data/ipo';

type IpoCompanyPageProps = {
  params: { slug: string };
};

export const generateStaticParams = () =>
  ipoOfferings.map((offering) => ({ slug: offering.slug }));

export const generateMetadata = ({ params }: IpoCompanyPageProps): Metadata => {
  const offering = getIpoBySlug(params.slug);
  if (!offering) {
    return {
      title: '공모주 상세',
    };
  }

  return {
    title: `${offering.companyNameKo} 공모주 청약 정보`,
    description: `${offering.companyNameKo} 공모주 청약일, 공모가 밴드, 주관사, 상장일 정보를 확인하세요.`,
    keywords: [
      `${offering.companyNameKo} 공모주`,
      `${offering.market} 공모주`,
      ...offering.leadManagers.map((manager) => `${manager} 공모주`),
    ],
    alternates: {
      canonical: `/ipo/company/${offering.slug}/`,
    },
    openGraph: {
      title: `${offering.companyNameKo} 공모주 청약 정보`,
      description: `${offering.companyNameKo} 공모주 핵심 일정과 청약 지표를 확인하세요.`,
      url: `/ipo/company/${offering.slug}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${offering.companyNameKo} 공모주 청약 정보`,
      description: `${offering.companyNameKo} 공모주 핵심 일정과 청약 지표를 확인하세요.`,
    },
  };
};

export default function IpoCompanyPage({ params }: IpoCompanyPageProps) {
  const offering = getIpoBySlug(params.slug);
  if (!offering) {
    notFound();
  }

  const financialProductJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: `${offering.companyNameKo} 공모주`,
    category: offering.market,
    description: `${offering.companyNameKo} 공모주 청약 정보 페이지`,
    provider: offering.leadManagers.map((manager) => ({
      '@type': 'Organization',
      name: manager,
    })),
    offers: {
      '@type': 'Offer',
      priceCurrency: offering.offerPriceBand.currency,
      lowPrice: offering.offerPriceBand.min,
      highPrice: offering.offerPriceBand.max,
      availabilityStarts: offering.subscriptionStartDate,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductJsonLd) }}
      />

      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/ipo/">공모주</Link>
        <span>/</span>
        <Link href="/ipo/2026/">2026</Link>
        <span>/</span>
        <span>{offering.companyNameKo}</span>
      </div>

      <h1 className="section-title">{offering.companyNameKo} 공모주 청약 정보</h1>
      <p className="section-description">
        {offering.industry} · 상태: {offering.status} ·{' '}
        <Link href={`/ipo/market/${offering.market.toLowerCase()}/`}>{offering.market}</Link>
      </p>

      <div className="list-grid">
        <article className="info-card">
          <h3>청약/상장 일정</h3>
          <p>청약: {offering.subscriptionStartDate} ~ {offering.subscriptionEndDate}</p>
          <p>환불일: {offering.refundDate ?? '-'}</p>
          <p>상장일: {offering.listingDate ?? '-'}</p>
          <p>최종 업데이트: {offering.lastUpdatedAt}</p>
        </article>

        <article className="info-card">
          <h3>공모 정보</h3>
          <p>
            희망 공모가: {offering.offerPriceBand.min.toLocaleString()}원 ~{' '}
            {offering.offerPriceBand.max.toLocaleString()}원
          </p>
          <p>확정 공모가: {offering.confirmedOfferPrice?.toLocaleString() ?? '-'}원</p>
          <p>
            주관사:{' '}
            {offering.leadManagers.map((manager, index) => (
              <span key={manager}>
                {index > 0 ? ', ' : ''}
                <Link href={`/ipo/manager/${managerSlugify(manager)}/`}>{manager}</Link>
              </span>
            ))}
          </p>
        </article>

        <article className="info-card">
          <h3>청약 참고</h3>
          <p>최소 청약 수량: {offering.minimumSubscriptionShares ?? '-'}주</p>
          <p>최소 증거금: {offering.minimumDepositKrW?.toLocaleString() ?? '-'}원</p>
          <p>일반청약 경쟁률: {offering.competitionRates?.retailSubscription ?? '-'}</p>
          <p>기관 수요예측: {offering.competitionRates?.institutionalDemandForecast ?? '-'}</p>
          <p>태그: {(offering.tags ?? []).join(', ') || '-'}</p>
          <a href={offering.officialNoticeUrl} target="_blank" rel="noreferrer">
            공식 안내 확인
          </a>
          <div style={{ marginTop: '0.75rem' }}>
            출처: {' '}
            {offering.sourceUrls.map((sourceUrl, index) => (
              <span key={sourceUrl}>
                {index > 0 ? ', ' : ''}
                <a href={sourceUrl} target="_blank" rel="noreferrer">
                  원문 {index + 1}
                </a>
              </span>
            ))}
          </div>
        </article>
      </div>

      <p className="section-description" style={{ marginTop: '1rem' }}>
        {offering.investmentWarning}
      </p>
    </div>
  );
}
