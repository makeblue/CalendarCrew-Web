import { buildPageMetadata } from '../../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'Privacy | CalendarCrew',
  description:
    'Read the CalendarCrew privacy route for upcoming details about how the product will handle personal information.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy details will live here.</h1>
        <p className="lede">
          This placeholder keeps the planned legal route structure in place
          while the full content is prepared.
        </p>
      </section>
    </main>
  );
}
