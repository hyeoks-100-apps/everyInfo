import type { Metadata } from 'next';
import Link from 'next/link';
import IpoScheduleSection from '../../../components/IpoScheduleSection';
import { getIpoByYear, splitOfferingsByVisibility } from '../../../data/ipo';

export const metadata: Metadata = {
  title: '2026 공모주 청약 일정',
  description: '2026년 공모주 청약 일정과 핵심 지표를 정리합니다.',
  keywords: ['2026 공모주', 'IPO 일정', '청약 일정', '주관사별 공모주'],
  alternates: {
    canonical: '/ipo/2026/',
  },
  openGraph: {
    title: '2026 공모주 청약 일정',
    description: '2026년 공모주 청약 일정과 핵심 지표를 정리합니다.',
    url: '/ipo/2026/',
  },
};

export default function Ipo2026Page() {
  const offerings = getIpoByYear('2026');
  const { visible, hidden } = splitOfferingsByVisibility(offerings);

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/ipo/">공모주</Link>
        <span>/</span>
        <span>2026</span>
      </div>
      <h1 className="section-title">2026 공모주 청약 일정</h1>
      <p className="section-description">
        진행 예정·진행중인 일정만 우선 노출됩니다. 마감 일정은 아래 접기 섹션에서 확인할 수 있습니다.
      </p>

      <IpoScheduleSection visible={visible} hidden={hidden} />
    </div>
  );
}
