export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand-lockup" href="/">
          <img alt="CalendarCrew" className="brand-logo" src="/brand/crew-logo.png" />
          <span className="brand-wordmark">CalendarCrew</span>
        </a>
        <nav className="simple-nav" aria-label="Primary">
          <a href="/about">About us</a>
        </nav>
      </div>
    </header>
  );
}
