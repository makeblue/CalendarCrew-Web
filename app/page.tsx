import { buildPageMetadata } from '../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'Crew | Event coordination',
  description:
    'Create an event, share the details, and coordinate responses in one place.',
  path: '/',
});

const steps = [
  ['01', 'Create an event', 'Set the time, place, and details your guests need.'],
  ['02', 'Share the invitation', 'Send the RSVP link through the channel you already use.'],
  ['03', 'Coordinate responses', 'See who is going, who is unsure, and who cannot make it.'],
];

export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero">
        <img alt="" className="hero-logo" src="/brand/crew-logo.png" />
        <p className="eyebrow">For event organizers</p>
        <h1>Make the event. Coordinate the details.</h1>
        <p className="lede">
          Crew gives the organizer one clear place to create an event, share
          the information, and keep track of responses.
        </p>
      </section>

      <section className="steps" aria-label="How Crew works for organizers">
        {steps.map(([number, title, body]) => (
          <article className="step" key={number}>
            <span className="step-number">{number}</span>
            <div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="quiet-callout">
        <p className="card-kicker">The website</p>
        <h2>The organizer works in Crew. Guests use the RSVP link.</h2>
        <p>
          This site is intentionally small. The app handles event creation and
          coordination; the RSVP endpoint handles guest responses.
        </p>
        <a className="text-link" href="/about">
          About Crew <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  );
}
