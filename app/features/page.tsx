import { buildPageMetadata } from '../../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'Features | Crew',
  description:
    'Explore Crew features for calendar sync, guest-friendly sharing, and clearer group planning.',
  path: '/features',
});

export default function FeaturesPage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Features</p>
        <h1>Crew features built for real group plans.</h1>
        <p className="lede">
          Calendar sync, guest-friendly sharing, and a clearer surface for
          plans that usually get buried in chat.
        </p>
      </section>

      <section className="story-grid" aria-label="Feature pillars">
        <article className="story-card">
          <p className="card-kicker">Calendar sync</p>
          <h2>Plans that actually land on real calendars.</h2>
          <p className="lede">
            Crew is meant to turn social momentum into something people can
            actually commit to and remember.
          </p>
        </article>
        <article className="story-card">
          <p className="card-kicker">Guest-friendly sharing</p>
          <h2>Useful even when everyone does not have the app yet.</h2>
          <p className="lede">
            Share pages, guest RSVP, and lighter-weight participation are part
            of the web surface from the start.
          </p>
        </article>
      </section>
    </main>
  );
}
