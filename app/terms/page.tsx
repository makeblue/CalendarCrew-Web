import { buildPageMetadata } from '../../lib/seo/site-metadata';

export const metadata = buildPageMetadata({
  title: 'Terms of Use | CalendarCrew',
  description:
    'Read the terms that apply when you use the CalendarCrew application, website, and RSVP service.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <main className="shell legal-page">
      <header className="legal-header">
        <p className="eyebrow">Terms of use</p>
        <h1>Simple rules for coordinating events.</h1>
        <p className="lede">
          These terms apply when you use the CalendarCrew application, website,
          or RSVP service. By using CalendarCrew, you agree to these terms.
        </p>
        <p className="legal-date">Effective November 17, 2026</p>
      </header>

      <div className="legal-content">
        <section>
          <h2>What CalendarCrew provides</h2>
          <p>
            CalendarCrew helps organizers create events, share event details,
            and collect responses. Guests may respond through the application or
            through a unique RSVP link without creating an account.
          </p>
          <p>
            CalendarCrew is a coordination tool. It is not an emergency service,
            ticketing guarantee, payment processor, or substitute for direct
            communication when timing or safety is critical.
          </p>
        </section>

        <section>
          <h2>Who may use the service</h2>
          <p>
            You must be able to enter into a binding agreement where you live to
            create or manage a CalendarCrew account. The service is not directed
            to children under 13. If you use CalendarCrew on behalf of an
            organization, you confirm that you have authority to accept these
            terms for that organization.
          </p>
        </section>

        <section>
          <h2>Your responsibilities</h2>
          <p>When using CalendarCrew, you agree to:</p>
          <ul>
            <li>Provide accurate information and keep account access secure.</li>
            <li>
              Share event and invitee information only when you have permission
              to do so.
            </li>
            <li>
              Keep unique RSVP links private and send them only to their intended
              recipients.
            </li>
            <li>
              Use RSVP information only to coordinate the event for which it was
              collected.
            </li>
            <li>Comply with applicable laws and respect other people&apos;s rights.</li>
          </ul>
          <p>
            Organizers are responsible for their events, invitations, event
            content, guest communications, and decisions based on RSVP results.
            Guests are responsible for the accuracy of their own responses.
          </p>
        </section>

        <section>
          <h2>Acceptable use</h2>
          <p>You may not use CalendarCrew to:</p>
          <ul>
            <li>Break the law, mislead, harass, threaten, or harm anyone.</li>
            <li>Send spam or invitations to people you are not permitted to contact.</li>
            <li>Post unlawful content or content that violates another person&apos;s rights.</li>
            <li>
              Access another person&apos;s account, event, or invitation without
              permission.
            </li>
            <li>
              Probe, disrupt, overload, reverse engineer, or bypass the security
              of the service, except where the law expressly permits it.
            </li>
            <li>Use automated means to scrape or collect data from CalendarCrew.</li>
          </ul>
        </section>

        <section>
          <h2>Your content</h2>
          <p>
            You keep ownership of information and content you submit. You give
            CalendarCrew a limited permission to host, process, display, and
            transmit that content only as needed to operate and improve the
            service. You confirm that you have the rights needed to provide the
            content and grant this permission.
          </p>
        </section>

        <section>
          <h2>CalendarCrew materials</h2>
          <p>
            CalendarCrew and its software, branding, design, and original
            content are protected by applicable intellectual-property laws.
            These terms give you permission to use the service, but do not
            transfer ownership of CalendarCrew materials to you.
          </p>
        </section>

        <section>
          <h2>Privacy</h2>
          <p>
            Our <a href="/privacy">Privacy Policy</a> explains how we collect,
            use, and protect information. By using CalendarCrew, you acknowledge
            those practices.
          </p>
        </section>

        <section>
          <h2>Service changes and account action</h2>
          <p>
            We may update, suspend, or discontinue parts of CalendarCrew. We may
            restrict or end access when reasonably necessary to protect users,
            comply with law, secure the service, or address a violation of these
            terms. You may stop using CalendarCrew at any time.
          </p>
        </section>

        <section>
          <h2>No guarantee of uninterrupted service</h2>
          <p>
            We work to keep CalendarCrew useful and available, but the service
            is provided &quot;as is&quot; and &quot;as available.&quot; To the extent permitted by
            law, we do not guarantee that it will always be uninterrupted,
            error-free, secure, or suitable for every event. Rights that cannot
            legally be excluded remain unaffected.
          </p>
        </section>

        <section>
          <h2>Limits on liability</h2>
          <p>
            To the extent permitted by law, CalendarCrew and its operators will
            not be liable for indirect, incidental, special, consequential, or
            punitive damages, or for lost data, profits, opportunities, or
            goodwill arising from use of the service. CalendarCrew is not
            responsible for events, organizer or guest conduct, third-party
            communications, or decisions made from RSVP information. Some laws
            do not allow certain limitations, so these limits may not apply to
            you.
          </p>
        </section>

        <section>
          <h2>Changes to these terms</h2>
          <p>
            We may update these terms as CalendarCrew changes. We will post the
            revised terms here and update the effective date. If a change is
            material, we will provide additional notice when appropriate. Your
            continued use after the revised terms take effect means you accept
            them.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent through the support contact
            listed in the CalendarCrew app or its app-store listing.
          </p>
        </section>
      </div>
    </main>
  );
}
