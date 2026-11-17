import { buildPageMetadata } from '../../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'Privacy Policy | CalendarCrew',
  description:
    'Learn what information CalendarCrew collects, how it is used, and the choices available to you.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <main className="shell legal-page">
      <header className="legal-header">
        <p className="eyebrow">Privacy policy</p>
        <h1>Your event data stays focused on your events.</h1>
        <p className="lede">
          CalendarCrew uses the information you provide to coordinate events,
          improve the application, and keep the service working. We do not sell
          personal information or share it for advertising.
        </p>
        <p className="legal-date">Effective November 17, 2026</p>
      </header>

      <div className="legal-content">
        <section>
          <h2>Information we collect</h2>
          <p>
            We collect information you provide when you use CalendarCrew. This
            may include account details, event titles and details, invitee
            information, guest names, invitation links, and RSVP responses.
          </p>
          <p>
            Our service providers may also process basic technical information,
            such as device, browser, log, and network information, when needed
            to deliver, secure, and troubleshoot the service.
          </p>
        </section>

        <section>
          <h2>How we use information</h2>
          <p>We use information to:</p>
          <ul>
            <li>Create and manage events and invitations.</li>
            <li>Show event details to invited guests and record RSVPs.</li>
            <li>Help organizers understand who plans to attend.</li>
            <li>Operate, secure, maintain, and troubleshoot CalendarCrew.</li>
            <li>Analyze event and usage trends to improve the application.</li>
          </ul>
          <p>
            When we analyze trends, we use aggregated or de-identified
            information where practical. We do not use personal information for
            targeted advertising.
          </p>
        </section>

        <section>
          <h2>We do not sell your data</h2>
          <p>
            CalendarCrew does not sell or rent personal information. We do not
            distribute personal information to data brokers, advertisers, or
            other companies for their own marketing.
          </p>
        </section>

        <section>
          <h2>When information is disclosed</h2>
          <p>
            An event organizer can see information needed to coordinate their
            event, including invited guests and RSVP responses. A guest using a
            valid invitation link can see the limited event details connected
            to that invitation.
          </p>
          <p>
            We use service providers, including hosting and data-storage
            providers, to operate CalendarCrew. They may process information
            only to provide services to us and are not permitted to use it for
            their own advertising. We may also disclose information if required
            by law, to protect people or the service, or as part of a business
            transfer where the recipient must continue to protect the data.
          </p>
        </section>

        <section>
          <h2>Invitation links</h2>
          <p>
            RSVP links are unique access links. Anyone who receives a valid link
            may be able to view its limited event details and submit or update
            the associated response. Organizers and guests should avoid posting
            invitation links publicly and should share them only with the
            intended recipient.
          </p>
        </section>

        <section>
          <h2>Retention and security</h2>
          <p>
            We retain information for as long as reasonably needed to provide
            CalendarCrew, maintain event records, meet legal obligations,
            resolve disputes, and protect the service. We delete or de-identify
            information when it is no longer needed for those purposes.
          </p>
          <p>
            We use reasonable administrative and technical safeguards designed
            to protect information. No online service can guarantee absolute
            security, so please use care when choosing what to include in an
            event or invitation.
          </p>
        </section>

        <section>
          <h2>Your choices</h2>
          <p>
            You may ask to access, correct, or delete personal information you
            provided, subject to legal and operational requirements. Event
            organizers can also update or remove event information through the
            application. Contact us using the support contact listed in the
            CalendarCrew app or its app-store listing.
          </p>
        </section>

        <section>
          <h2>Children</h2>
          <p>
            CalendarCrew is not directed to children under 13, and we do not
            knowingly collect personal information directly from children under
            13. If you believe a child has provided personal information, please
            contact us so we can review and remove it when appropriate.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>
            We may update this policy as CalendarCrew changes. We will post the
            revised policy here and update the effective date. If a change
            materially affects how we use personal information, we will provide
            additional notice when appropriate.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions or privacy requests can be sent through the support
            contact listed in the CalendarCrew app or its app-store listing.
          </p>
        </section>
      </div>
    </main>
  );
}
