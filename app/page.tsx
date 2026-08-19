import { buildPageMetadata } from '../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'CalendarCrew | Event coordination',
  description:
    'Create an event, share the details, and coordinate responses in one place.',
  path: '/',
});

const steps = [
  ['01', 'Create an event', 'Set the time, place, and details your guests need.'],
  ['02', 'App users RSVP in CalendarCrew', 'People using the app are notified there and can respond directly in the app.'],
  ['03', 'Share unique RSVP links', 'For guests who do not use the app, share their unique link by text, email, or any channel you use.'],
  ['04', 'Coordinate responses', 'See app RSVPs and link responses together in one place.'],
];

export default function HomePage() {
  return (
    <main className="shell">
      <section className="hero">
        <img alt="" className="hero-logo" src="/brand/crew-logo.png" />
        <p className="eyebrow">For event organizers</p>
        <h1>Make the event. Coordinate the details.</h1>
        <p className="lede">
          CalendarCrew gives the organizer one clear place to create an event, share
          the information, and keep track of responses.
        </p>
      </section>

      <section className="steps" aria-label="How CalendarCrew works for organizers">
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
        <h2>The organizer works in CalendarCrew. Guests use the RSVP link.</h2>
        <p>
          This site is intentionally small. The app handles event creation and
          coordination; the RSVP endpoint handles guest responses.
        </p>
        <a className="text-link" href="/about">
          About CalendarCrew <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  );
}
