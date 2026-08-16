import { buildPageMetadata } from '../../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'Download | Crew',
  description:
    'Download Crew for mobile today and use the growing desktop companion for planning and share flows.',
  path: '/download',
});

export default function DownloadPage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Download</p>
        <h1>Take Crew with you.</h1>
        <p className="lede">
          Mobile stays the primary experience today, while the website grows
          into a strong desktop companion for planning, browsing, and share
          flows.
        </p>
      </section>

      <section className="story-grid" aria-label="Download options">
        <article className="story-card">
          <p className="card-kicker">App Store</p>
          <h2>Keep Crew close when the plan is moving fast.</h2>
          <p className="lede">
            iPhone and Android remain the best place for quick responses,
            notifications, and in-the-moment coordination.
          </p>
        </article>
        <article className="story-card">
          <p className="card-kicker">Desktop companion</p>
          <h2>Use the web when a bigger canvas is the better tool.</h2>
          <p className="lede">
            The browser surface is being shaped for calmer review, wider
            planning views, and richer share experiences.
          </p>
        </article>
      </section>
    </main>
  );
}
