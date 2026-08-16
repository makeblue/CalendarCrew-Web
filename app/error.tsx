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
        <p className="eyebrow">Crew</p>
        <h1>Something went off-script.</h1>
        <p className="lede">
          We hit an unexpected problem while loading this part of the website.
        </p>
        {error.digest ? (
          <p className="secondary-action">Reference: {error.digest}</p>
        ) : null}
        <div className="hero-actions">
          <button className="primary-action" onClick={() => reset()} type="button">
            Try again
          </button>
          <a className="secondary-action" href="/">
            Return home
          </a>
        </div>
      </section>
    </main>
  );
}
