'use client';

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">CalendarCrew</p>
        <h1>Something went wrong.</h1>
        <p className="lede">
          We hit an unexpected problem while loading this part of the website.
        </p>
        {error.digest ? <p className="rsvp-message">Reference: {error.digest}</p> : null}
        <div className="hero-actions">
          <button className="plain-button" onClick={() => reset()} type="button">
            Try again
          </button>
          <a className="text-link" href="/">
            Return home
          </a>
        </div>
      </section>
    </main>
  );
}
