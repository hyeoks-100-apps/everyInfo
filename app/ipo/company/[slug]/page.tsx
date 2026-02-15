import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ipoOfferings2026 } from '../../../../data/ipo2026';

type IpoCompanyPageProps = {
  params: { slug: string };
};

const getOffering = (slug: string) => ipoOfferings2026.find((item) => item.slug === slug);

export const generateStaticParams = () =>
  ipoOfferings2026.map((offering) => ({ slug: offering.slug }));

export const generateMetadata = ({ params }: IpoCompanyPageProps): Metadata => {
  const offering = getOffering(params.slug);
  if (!offering) {
    return {
      title: '공모주 상세',
    };
  }

  return {
    title: `${offering.companyNameKo} 공모주 청약 정보`,
    description: `${offering.companyNameKo} 공모주 청약일, 공모가 밴드, 주관사, 상장일 정보를 확인하세요.`,
    alternates: {
      canonical: `/ipo/company/${offering.slug}/`,
    },
  };
};

export default function IpoCompanyPage({ params }: IpoCompanyPageProps) {
  const offering = getOffering(params.slug);
  if (!offering) {
    notFound();
  }

  return (
    <div>
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
      <p className="section-description">{offering.industry} · {offering.market}</p>

      <div className="list-grid">
        <article className="info-card">
          <h3>청약/상장 일정</h3>
          <p>청약: {offering.subscriptionStartDate} ~ {offering.subscriptionEndDate}</p>
          <p>환불일: {offering.refundDate ?? '-'}</p>
          <p>상장일: {offering.listingDate ?? '-'}</p>
        </article>

        <article className="info-card">
          <h3>공모 정보</h3>
          <p>
            희망 공모가: {offering.offerPriceBand.min.toLocaleString()}원 ~{' '}
            {offering.offerPriceBand.max.toLocaleString()}원
          </p>
          <p>확정 공모가: {offering.confirmedOfferPrice?.toLocaleString() ?? '-'}원</p>
          <p>주관사: {offering.leadManagers.join(', ')}</p>
        </article>

        <article className="info-card">
          <h3>청약 참고</h3>
          <p>최소 청약 수량: {offering.minimumSubscriptionShares ?? '-'}주</p>
          <p>최소 증거금: {offering.minimumDepositKrW?.toLocaleString() ?? '-'}원</p>
          <p>일반청약 경쟁률: {offering.competitionRates?.retailSubscription ?? '-'}</p>
          <a href={offering.officialNoticeUrl} target="_blank" rel="noreferrer">
            공식 안내 확인
          </a>
        </article>
      </div>

      <p className="section-description" style={{ marginTop: '1rem' }}>
        {offering.investmentWarning}
      </p>
    </div>
  );
}
