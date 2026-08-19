# CalendarCrew Web

This is the standalone Next.js website for CalendarCrew, deployed as a static site to GitHub Pages.

The public website is intentionally small:

- A coordinator-focused home page
- An About page
- A static RSVP endpoint backed by Supabase

Current env and routing seams:

- Public RSVP URL
  - The static RSVP route is `/rsvp?token=<opaque-token>`.
  - The existing app generates the token and opens the device share sheet.
  - Supabase validates the token, returns a limited event payload, and records the guest RSVP.
- Public configuration
  - Use only public Supabase URL and anonymous-key configuration in the browser.
  - Never commit service-role keys or other private credentials.

The RSVP page posts two operations to the configured `guest-rsvp` Supabase Edge
Function: `preview` validates the bearer token and returns a limited event
payload; `respond` submits the guest name and RSVP status. Configure
`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and optionally
`NEXT_PUBLIC_RSVP_ENDPOINT` in local development and as GitHub Actions secrets.
The request and response contract is documented in
`docs/supabase-rsvp-contract.md`.

Local workflow:

1. Install dependencies at the repository root if needed.
2. Run `npm run dev`.
3. Open `/` for the coordinator site or `/rsvp?token=...` for the RSVP endpoint.
