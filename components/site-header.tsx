import { MarketingNav } from './marketing-nav';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand-lockup" href="/">
          <span className="brand-mark">C</span>
          <span className="brand-wordmark">Crew</span>
        </a>
        <MarketingNav />
        <a className="header-action" href="/surface">
          Open the surface
        </a>
      </div>
    </header>
  );
}
