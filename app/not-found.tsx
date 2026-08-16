export default function NotFound() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Crew</p>
        <h1>Page not found.</h1>
        <p className="lede">
          The link you opened drifted off course, but the rest of the Crew
          surface is still here.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="/">
            Return home
          </a>
          <a className="secondary-action" href="/surface">
            Open the desktop surface
          </a>
        </div>
      </section>
    </main>
  );
}
