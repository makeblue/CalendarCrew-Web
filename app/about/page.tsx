import { buildPageMetadata } from '../../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'About | Crew',
  description:
    'Learn why Crew focuses on social coordination for small groups, recurring plans, and shared momentum.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">About</p>
        <h1>Crew is built for people who actually do things together.</h1>
        <p className="lede">
          The goal is simple: fewer coordination spirals, more social
          coordination that ends in plans people actually show up for.
        </p>
      </section>

      <section className="story-grid" aria-label="Crew mission">
        <article className="story-card">
          <p className="card-kicker">Why this exists</p>
          <h2>Small groups deserve better planning tools.</h2>
          <p className="lede">
            Crew focuses on friend groups, recurring rituals, and local plans
            that usually get trapped in scattered messages.
          </p>
        </article>
        <article className="story-card">
          <p className="card-kicker">What we care about</p>
          <h2>Less noise, more movement.</h2>
          <p className="lede">
            The product should make it easier to commit, easier to respond, and
            easier to keep momentum without overcomplicating the social part.
          </p>
        </article>
      </section>
    </main>
  );
}
