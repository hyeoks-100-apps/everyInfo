import type { Metadata } from 'next';
import Link from 'next/link';
import LinksSearchClient from '../../../components/LinksSearchClient';

export const metadata: Metadata = {
  title: '주소 모음 검색',
  description: '주소 모음에서 원하는 사이트를 검색하세요.',
  alternates: {
    canonical: '/links/search/',
  },
};

export default function LinksSearchPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <Link href="/links/">주소 모음</Link>
        <span>/</span>
        <span>검색</span>
      </div>
      <LinksSearchClient />
    </div>
  );
}
