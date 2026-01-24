import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '../components/SiteHeader';
import { siteConfig, siteUrl } from '../lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: '%s | everyInfo',
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'everyInfo 미리보기 이미지',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2370970936034063"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <SiteHeader />
        <main className="container main-content">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>everyInfo는 정적 정보 페이지를 큐레이션합니다.</p>
            <p>© 2026 everyInfo. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
