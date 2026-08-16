# Crew Web Implementation Plan

## Purpose

This repository is a standalone Next.js website for Crew. It is separate from the existing mobile app repository so the public Crew website can be built and published through GitHub Pages without changing the app's deployment surface.

The website should do three jobs:

1. Ship a polished public marketing site for Crew.
2. Provide a responsive, computer-friendly surface for selected lightweight interactions.
3. Host a static RSVP experience backed by Supabase for guests who do not have Crew accounts.

The mobile app remains responsible for creating invitee tokens, sharing RSVP links, and providing the event coordinator's owner-facing RSVP view. Supabase remains responsible for validation, authorization, and persistence.

## Product Direction

### Primary outcomes

- Give first-time visitors a fast, credible understanding of Crew.
- Establish a durable standalone web surface that can grow past a landing page.
- Make selected browsing, planning, and RSVP interactions useful on larger screens.
- Let guests complete an RSVP without installing the app or creating an account.

### Visual direction

Use Crew's existing color family on a dark-first foundation:

- Deep charcoal / near-black backgrounds
- Existing Crew hues for CTAs, highlights, pills, gradients, and illustrations
- Bright panels, cards, and event surfaces over the dark field
- Centralized tokens shared conceptually with the app, without requiring this repo to contain the app code

## Scope

### In scope

- Standalone Next.js application at the repository root
- Marketing pages at `/`, `/features`, `/about`, `/download`, and required legal pages
- Responsive laptop and mobile layouts
- Static RSVP page at `/rsvp?token=<opaque-token>`
- Supabase-backed token validation and RSVP submission integration
- Shared metadata, analytics hooks, SEO primitives, and brand tokens
- GitHub Actions deployment to GitHub Pages

### Out of scope for the first implementation

- Full authenticated parity with the mobile app
- Crew-sent email, SMS, or WhatsApp delivery
- A blog or CMS before the core site is stable
- Rebuilding the Flutter app as a web app
- Billing, account settings, or broad creator dashboards
- Token generation or invitation management in this repository

## Recommended Stack and Hosting

- Next.js App Router configured for static export
- GitHub Pages for static hosting and GitHub Actions for deployment
- Supabase Edge Function and/or secured database RPC for token validation and RSVP writes
- Supabase public client configuration only; no service-role keys or private secrets in the browser or repository
- Static generation for marketing content; client-side token handling for RSVP pages

GitHub Pages cannot execute server-side Next.js rendering or arbitrary backend code. The website must never depend on SSR for RSVP data. A static page reads the token from the URL and calls Supabase for the limited authorized payload.

## Repository Structure

```text
/
├── app/                  # Next.js routes and static RSVP experience
├── components/           # Shared site and product UI
├── lib/                  # API, Supabase, SEO, config, and utilities
├── public/               # Static assets
├── docs/                 # Website and RSVP plans
├── .github/workflows/    # GitHub Pages deployment
├── next.config.ts
└── package.json
```

Keep app-specific token generation and coordinator workflows in the existing app/backend project. This repo should consume only the public contract required to validate a token and submit a guest RSVP.

## Delivery Phases

### Phase 1 — Marketing Shell

- Home page with clear Crew positioning and app download CTA
- Features, about, download, privacy, and terms pages
- Global navigation, footer, metadata, sitemap, robots, and analytics hooks
- Dark theme foundation with Crew accent tokens
- Reusable section and screenshot primitives

### Phase 2 — Responsive Computer-Friendly Surface

- Desktop-friendly event detail views
- Lightweight browsing and planning layouts
- Calendar-oriented views, list/detail panes, and richer empty states
- Download/app-handoff prompts for actions that remain mobile-owned

This is not full mobile-app parity. Use layouts that justify the desktop surface rather than stretching a phone UI across a larger screen.

### Phase 3 — Static Guest RSVP

#### Goal

Allow a guest to open an app-generated RSVP link, provide their name, choose a response, and have the coordinator see the result in Crew.

#### Route

```text
/rsvp?token=<opaque-token>
```

The route must be statically deployable. It may not depend on a server-rendered dynamic segment or server-only environment variable.

#### Functional requirements

- Read the token from the browser URL.
- Validate the token through Supabase before requesting event details.
- Display only the limited event payload returned for that token.
- Collect guest name and `Going`, `Maybe`, or `Can't Go` response.
- Record the response through Supabase.
- Support response updates while the token remains valid.
- Handle missing, malformed, invalid, expired, revoked, loading, success, and error states.
- Keep the complete invitee list and private account data out of the browser.

#### Non-functional requirements

- Mobile-friendly and fast on weak connections
- HTTPS through GitHub Pages
- Strict RLS and/or a narrowly scoped Edge Function/RPC
- No raw tokens in logs or analytics
- No service-role credentials in the repository or client bundle
- Privacy-aware indexing rules for tokenized pages

#### Exit criteria

- An inviter can share a working RSVP URL through their normal messaging app.
- A guest can complete or update an RSVP without installing Crew.
- The coordinator can see the response in the existing app flow.
- Invalid, expired, and revoked tokens reveal no event details.

## Cross-Cutting Requirements

### SEO and metadata

- Unique metadata for public marketing routes
- Sitemap and robots rules for indexable marketing pages
- `noindex` behavior for tokenized RSVP experiences
- Avoid trying to generate per-token server metadata on GitHub Pages

### Analytics

- Track marketing page views and download CTA taps
- Track RSVP funnel events without recording raw tokens, names, or private event details

### Accessibility

- Keyboard-navigable navigation and RSVP controls
- Sufficient contrast on the dark theme
- Semantic headings and reduced-motion support
- Clear form labels and error messages

### Performance

- Keep marketing pages light and static
- Avoid client-side dependencies until needed
- Load RSVP data only after token validation

## Near-Term Execution Slices

### Slice 1 — Static deployment foundation

- Configure Next.js static export
- Confirm GitHub Actions builds the root-level package
- Confirm the generated artifact is uploaded to GitHub Pages
- Add public runtime configuration for the Supabase URL and anonymous key

### Slice 2 — Marketing shell

- Implement global header/footer, home page, legal pages, and download page
- Add reusable section, card, button, and screenshot components
- Wire baseline metadata and analytics

### Slice 3 — Static RSVP page

- Add `/rsvp` as a static page
- Read and validate `?token=` through Supabase
- Render limited event data and response controls
- Cover invalid, expired, revoked, success, and update states

### Slice 4 — App/backend contract integration

- Coordinate the token and limited-payload contract with the existing app/backend project
- Confirm app-generated links and native share-sheet behavior
- Confirm coordinator attendance counts and revocation behavior

## Success Metrics

- Visitors understand Crew quickly and can find the download CTA
- The site deploys successfully from `main` to GitHub Pages
- A guest can RSVP without a Crew account or Crew-sent message
- The coordinator sees external guest responses alongside app RSVPs

## Immediate Recommendation

Treat this repository as the static, public Crew website and RSVP frontend. Configure it for GitHub Pages, keep all token validation and writes behind Supabase, and coordinate the token-generation and coordinator workflows with the existing app repository.
