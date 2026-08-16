import { buildPageMetadata } from '../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'Crew | Move in sync.',
  description:
    'Plan nights out, keep crews aligned, and turn loose ideas into shared momentum.',
  path: '/',
});

const pulseItems = [
  {
    title: "Tonight's pulse",
    body: 'A quick snapshot of who is in, what is moving, and where energy is building.',
  },
  {
    title: 'Crew rituals',
    body: 'Recurring plans, neighborhood favorites, and traditions your group actually keeps.',
  },
  {
    title: 'Shared momentum',
    body: 'Loose ideas become real plans with clear next steps, timing, and a committed crew.',
  },
];

const frictionPoints = [
  'Group chats hide the actual decision.',
  'RSVP status gets stale fast.',
  'Desktop planning usually means spreadsheets or tabs everywhere.',
];

const outcomePoints = [
  'A single view for momentum, replies, and who is actually in.',
  'Event details that stay clear even when plans shift.',
  'A path to a real desktop surface instead of a phone-shaped compromise.',
];

export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Crew</p>
        <h1>Move in sync.</h1>
        <p className="lede">Plan nights out, keep crews aligned, and turn loose ideas into shared momentum.</p>
        <div className="hero-actions">
          <a className="primary-action" href="/surface">
            Open the desktop surface
          </a>
          <span className="secondary-action">
            Dark-mode website built from the Crew product language
          </span>
        </div>
      </section>

      <section className="story-grid" aria-label="Why crews use Crew">
        <article className="story-card">
          <p className="card-kicker">Why crews stall</p>
          <h2>Plans fade when the next step is buried in noise.</h2>
          <ul className="story-list">
            {frictionPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="story-card">
          <p className="card-kicker">What changes with Crew</p>
          <h2>Coordination becomes visible, shared, and easier to finish.</h2>
          <ul className="story-list">
            {outcomePoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="signal-grid" id="surface" aria-label="Crew landing highlights">
        {pulseItems.map((item) => (
          <article className="signal-card" key={item.title}>
            <p className="card-kicker">Surface</p>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="desktop-callout">
        <p className="card-kicker">Desktop when you want it</p>
        <h2>The web surface is being shaped for real computer use.</h2>
        <p>
          That means split-pane planning, richer visibility, and calmer browsing
          when a laptop is the better tool.
        </p>
        <a className="primary-action" href="/surface">
          View the first desktop route
        </a>
      </section>
    </main>
  );
}
