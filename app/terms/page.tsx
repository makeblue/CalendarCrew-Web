import { buildPageMetadata } from '../../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'Terms | CalendarCrew',
  description:
    'Read the CalendarCrew terms route for upcoming details about the product terms and website usage.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Terms</p>
        <h1>Terms content will live here.</h1>
        <p className="lede">
          This placeholder keeps the planned legal route structure in place
          while the full content is prepared.
        </p>
      </section>
    </main>
  );
}
