export default function NotFound() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">CalendarCrew</p>
        <h1>Page not found.</h1>
        <p className="lede">
          The page you requested does not exist.
        </p>
        <div className="hero-actions">
          <a className="text-link" href="/">
            Return home
          </a>
          <a className="text-link" href="/about">
            About us
          </a>
        </div>
      </section>
    </main>
  );
}
