import { buildPageMetadata } from '../../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'About | CalendarCrew',
  description:
    'Learn about CalendarCrew, a straightforward event coordination tool for organizers.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">About us</p>
        <h1>CalendarCrew is for the person organizing the event.</h1>
        <p className="lede">
          We are building a straightforward way to create an event, give
          everyone the same information, and see the responses in one place.
        </p>
      </section>

      <section className="about-copy" aria-label="About CalendarCrew">
        <article>
          <p className="card-kicker">Our focus</p>
          <h2>Clear event details. Clear responses.</h2>
          <p className="lede">
            CalendarCrew keeps the organizer focused on the practical work: setting up
            the event, sharing it, and knowing what to plan for.
          </p>
        </article>
        <article>
          <p className="card-kicker">The RSVP link</p>
          <h2>Guests do not need an account.</h2>
          <p className="lede">
            People using the app are notified there and can RSVP in CalendarCrew.
            Guests who do not use the app receive a unique link that the
            organizer can share with them. They open it, enter their name, and
            respond. The organizer sees both responses in CalendarCrew.
          </p>
        </article>
      </section>
    </main>
  );
}
