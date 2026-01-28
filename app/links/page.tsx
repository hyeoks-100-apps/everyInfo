import type { Metadata } from 'next';
import Link from 'next/link';
import LinksExplorer from '../../components/LinksExplorer';
import { linkCollections } from '../../data/linkCollections';

export const metadata: Metadata = {
  title: '주소 모음',
  description: '웹툰, OTT, 스포츠, 커뮤니티 등 인기 사이트 주소를 카테고리별로 정리했습니다.',
  alternates: {
    canonical: '/links/',
  },
  openGraph: {
    title: '주소 모음',
    description: '웹툰, OTT, 스포츠, 커뮤니티 등 인기 사이트 주소를 카테고리별로 정리했습니다.',
    url: '/links/',
  },
  twitter: {
    card: 'summary_large_image',
    title: '주소 모음',
    description: '웹툰, OTT, 스포츠, 커뮤니티 등 인기 사이트 주소를 카테고리별로 정리했습니다.',
  },
};

export default function LinksPage() {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">홈</Link>
        <span>/</span>
        <span>주소 모음</span>
      </div>
      <LinksExplorer categories={linkCollections} />
    </div>
  );
}
