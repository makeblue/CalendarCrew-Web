# Supabase Guest RSVP Contract

The standalone website calls a Supabase Edge Function at:

```text
https://<project-ref>.supabase.co/functions/v1/guest-rsvp
```

The browser sends the publishable Supabase anonymous key in `apikey` and `Authorization` headers. No service-role key belongs in this repository, the browser bundle, or GitHub Actions public output.

## Preview

Request:

```json
{
  "action": "preview",
  "token": "opaque-token"
}
```

Success response:

```json
{
  "event": {
    "title": "Crew dinner",
    "startsAt": "2026-09-12T19:00:00.000Z",
    "endsAt": "2026-09-12T21:00:00.000Z",
    "location": "The venue",
    "description": "Dinner together",
    "hostLabel": "Alex"
  },
  "currentStatus": "maybe",
  "guestName": "Jordan"
}
```

The function must validate the raw token before returning any event fields. Invalid, expired, revoked, and malformed tokens should return the same generic failure shape so callers cannot use the endpoint to probe invitation state.

## Respond

Request:

```json
{
  "action": "respond",
  "token": "opaque-token",
  "guestName": "Jordan",
  "status": "going"
}
```

Success response:

```json
{
  "status": "going"
}
```

Supported statuses are `going`, `maybe`, and `cant_go`. The function should trim and validate the name, enforce a reasonable length limit, hash/compare the token server-side, and update only the invitation represented by that token.

## Required protections

- Hash invitation tokens at rest; never store raw tokens.
- Keep token validation and database writes inside the Edge Function or a narrowly scoped security-definer RPC.
- Return only the limited event payload for the validated invitation.
- Never return the invitee list, private account data, raw token, token hash, or service credentials.
- Enforce expiration and coordinator revocation.
- Rate-limit preview and respond operations.
- Validate the request origin and configure CORS for the production site and approved local development origins.
- Avoid logging request bodies, raw tokens, guest names, or contact details.
- Make response submission idempotent for a valid token so refreshing or retrying does not create duplicate guest records.
