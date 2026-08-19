import { buildPageMetadata } from '../../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'About | Crew',
  description:
    'Learn about Crew, a straightforward event coordination tool for organizers.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">About us</p>
        <h1>Crew is for the person organizing the event.</h1>
        <p className="lede">
          We are building a straightforward way to create an event, give
          everyone the same information, and see the responses in one place.
        </p>
      </section>

      <section className="about-copy" aria-label="About Crew">
        <article>
          <p className="card-kicker">Our focus</p>
          <h2>Clear event details. Clear responses.</h2>
          <p className="lede">
            Crew keeps the organizer focused on the practical work: setting up
            the event, sharing it, and knowing what to plan for.
          </p>
        </article>
        <article>
          <p className="card-kicker">The RSVP link</p>
          <h2>Guests do not need an account.</h2>
          <p className="lede">
            The app creates a secure link for an invitee. They open it, enter
            their name, and respond. The organizer sees the result in Crew.
          </p>
        </article>
      </section>
    </main>
  );
}
