import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getIpoByManagerSlug,
  ipoManagers,
  splitOfferingsByVisibility,
} from '../../../../data/ipo';

type IpoManagerPageProps = {
  params: { slug: string };
};

export const generateStaticParams = () => ipoManagers.map((manager) => ({ slug: manager.slug }));

export const generateMetadata = ({ params }: IpoManagerPageProps): Metadata => {
  const manager = ipoManagers.find((item) => item.slug === params.slug);
  if (!manager) {
    return { title: '주관사별 공모주' };
  }

  return {
    title: `${manager.name} 주관 공모주 일정`,
    description: `${manager.name}에서 청약 가능한 공모주 일정과 핵심 지표를 확인하세요.`,
    alternates: {
      canonical: `/ipo/manager/${manager.slug}/`,
    },
  };
};

export default function IpoManagerPage({ params }: IpoManagerPageProps) {
  const { managerName, offerings } = getIpoByManagerSlug(params.slug);

  if (!managerName || offerings.length === 0) {
    notFound();
  }

  const { visible, hidden } = splitOfferingsByVisibility(offerings);

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/ipo/">공모주</Link>
        <span>/</span>
        <Link href="/ipo/manager/">주관사별</Link>
        <span>/</span>
        <span>{managerName}</span>
      </div>

      <h1 className="section-title">{managerName} 주관 공모주 일정</h1>

      {visible.length > 0 ? (
        <div className="list-grid">
          {visible.map((offering) => (
            <article key={offering.id} className="info-card">
              <h3>{offering.companyNameKo}</h3>
              <p>
                청약일: {offering.subscriptionStartDate} ~ {offering.subscriptionEndDate}
              </p>
              <p>시장: {offering.market}</p>
              <Link className="card-link" href={`/ipo/company/${offering.slug}/`}>
                기업 상세 보기 →
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="info-card">현재 노출 가능한 진행 예정 일정이 없습니다.</div>
      )}

      {hidden.length > 0 ? (
        <details className="info-card" style={{ marginTop: '1rem' }}>
          <summary>지난 일정 {hidden.length}건 보기</summary>
          <div className="list-grid" style={{ marginTop: '1rem' }}>
            {hidden.map((offering) => (
              <article key={`${offering.id}-past`} className="info-card">
                <h3>{offering.companyNameKo}</h3>
                <p>
                  상태: {offering.status} · 청약일: {offering.subscriptionStartDate} ~{' '}
                  {offering.subscriptionEndDate}
                </p>
                <Link className="card-link" href={`/ipo/company/${offering.slug}/`}>
                  기업 상세 보기 →
                </Link>
              </article>
            ))}
          </div>
        </details>
      ) : null}
    </div>
  );
}
