import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getIpoByMarket, ipoMarkets } from '../../../../data/ipo';

type IpoMarketPageProps = {
  params: { market: string };
};

const normalizeMarket = (market: string) => market.toUpperCase();

export const generateStaticParams = () =>
  ipoMarkets.map((market) => ({ market: market.toLowerCase() }));

export const generateMetadata = ({ params }: IpoMarketPageProps): Metadata => {
  const market = normalizeMarket(params.market);
  if (!ipoMarkets.includes(market as (typeof ipoMarkets)[number])) {
    return { title: '시장별 공모주' };
  }

  return {
    title: `${market} 공모주 청약 일정`,
    description: `${market} 시장의 공모주 청약일, 공모가, 주관사 정보를 정리합니다.`,
    alternates: {
      canonical: `/ipo/market/${params.market}/`,
    },
  };
};

export default function IpoMarketPage({ params }: IpoMarketPageProps) {
  const market = normalizeMarket(params.market);
  const offerings = getIpoByMarket(market);

  if (!offerings.length) {
    notFound();
  }

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/ipo/">공모주</Link>
        <span>/</span>
        <Link href="/ipo/market/">시장별</Link>
        <span>/</span>
        <span>{market}</span>
      </div>

      <h1 className="section-title">{market} 공모주 청약 일정</h1>
      <div className="list-grid">
        {offerings.map((offering) => (
          <article key={offering.id} className="info-card">
            <h3>{offering.companyNameKo}</h3>
            <p>
              청약일: {offering.subscriptionStartDate} ~ {offering.subscriptionEndDate}
            </p>
            <p>
              희망 공모가: {offering.offerPriceBand.min.toLocaleString()}원 ~{' '}
              {offering.offerPriceBand.max.toLocaleString()}원
            </p>
            <Link className="card-link" href={`/ipo/company/${offering.slug}/`}>
              기업 상세 보기 →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
