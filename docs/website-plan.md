# CalendarCrew Website Plan

## Purpose

This repository is the standalone public website for CalendarCrew. It is deliberately small and separate from the mobile app.

The website has three responsibilities:

1. Explain Crew to event organizers.
2. Provide a short About page.
3. Host the static RSVP endpoint used by invitees from app-generated links.

The Crew app remains responsible for creating events, generating invitation tokens, sharing links, and showing the coordinator's RSVP results.

## Public Surface

### Home — `/`

The home page should answer one question plainly: what does Crew help the organizer do?

It should focus on:

- Creating an event
- Sharing the event details
- Coordinating RSVP responses

Avoid promotional claims, broad feature marketing, download campaigns, product hype, and decorative interaction demos.

### About — `/about`

Explain who Crew is for and why the product focuses on event organizers. Keep the page direct and factual.

### Guest RSVP — `/rsvp?token=<opaque-token>`

This is a functional endpoint, not a marketing page. It should:

- Read the token from the URL.
- Validate the token through the Supabase `guest-rsvp` Edge Function.
- Display only the limited event payload returned for the validated invitation.
- Collect the guest's name.
- Accept `going`, `maybe`, or `cant_go`.
- Record or update the RSVP in Supabase.
- Handle missing, invalid, expired, revoked, loading, success, and error states.

Guests do not need a Crew account. The website must not expose invitee lists, private account information, raw database records, raw tokens, or token hashes.

### Legal routes

Keep `/privacy` and `/terms` available as quiet legal placeholders until their final content is prepared. They should not compete with the home page or appear as product marketing.

## Visual Direction

Use the Crew app logo as the source of truth for the website palette:

- Deep navy for the header, footer, and primary text
- Cyan for the main brand highlight
- Orange for primary actions and small labels
- Pink and green retained as supporting brand accents when state colors are needed
- Light neutral background for a clear, practical reading surface

The visual language should feel calm and functional. Use generous whitespace, short copy, simple dividers, and restrained type hierarchy. Do not add gradients, glass panels, feature grids, animated hero sections, or phone mockups unless a future requirement specifically calls for them.

## Hosting and Configuration

- Next.js App Router with `output: 'export'`
- GitHub Pages through GitHub Actions
- Supabase Edge Function for token validation and RSVP persistence
- Public Supabase URL and anonymous key only in the browser
- No service-role key, private token, or database credential in this repository

The current function contract is documented in `docs/supabase-rsvp-contract.md`.

## Repository Boundaries

This site must remain independent from the Crew app repository.

The app owns:

- Event creation and editing
- Invitee management
- Cryptographically secure token generation
- Native share-sheet behavior
- Coordinator attendance and RSVP views
- Token revocation

The website owns:

- Public organizer-facing copy
- Static brand and legal pages
- Guest RSVP form and states
- Calling the Supabase RSVP contract

Crew does not send email, SMS, WhatsApp messages, reminders, or other outbound messages for the MVP. The inviter shares the generated link through their normal messaging channel.

## Success Criteria

- An organizer understands Crew within a few seconds.
- The site feels like a practical tool, not a marketing campaign.
- The home page and About page contain no unsupported product claims.
- An app-generated RSVP link opens a static page on GitHub Pages.
- A valid guest can view only their permitted event details and submit one response.
- A guest can update their response while the token remains valid.
- Invalid, expired, or revoked tokens reveal no event details.
