import Link from 'next/link';

const navItems = [
  { href: '/', label: '홈' },
  { href: '/marathon/', label: '마라톤' },
  { href: '/game/', label: '게임' },
  { href: '/cosmetics/', label: '화장품' },
  { href: '/links/', label: '링크 모음' },
  { href: '/about/', label: 'About' },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link className="logo" href="/">
          everyInfo
        </Link>
        <nav aria-label="주요 메뉴">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
