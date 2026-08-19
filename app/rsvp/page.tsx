'use client';

import { FormEvent, useEffect, useState } from 'react';
import {
  fetchRsvpPreview,
  RsvpPreview,
  RsvpStatus,
  submitRsvp,
} from '../../lib/api/rsvp';

const statusLabels: Record<RsvpStatus, string> = {
  going: 'Going',
  maybe: 'Maybe',
  cant_go: "Can't go",
};

function formatEventWindow(startsAt: string, endsAt: string | null): string {
  const start = new Date(startsAt);
  const startLabel = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(start);

  if (!endsAt) {
    return startLabel;
  }

  const endLabel = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(endsAt));

  return `${startLabel} - ${endLabel}`;
}

export default function RsvpPage() {
  const [token, setToken] = useState<string | null>(null);
  const [preview, setPreview] = useState<RsvpPreview | null>(null);
  const [guestName, setGuestName] = useState('');
  const [status, setStatus] = useState<RsvpStatus | null>(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const queryToken = new URLSearchParams(window.location.search).get('token');

    setToken(queryToken?.trim() || null);

    if (!queryToken?.trim()) {
      setMessage('This RSVP link is missing its invitation token.');
      setIsLoading(false);
      return;
    }

    fetchRsvpPreview(queryToken.trim())
      .then((nextPreview) => {
        setPreview(nextPreview);
        setGuestName(nextPreview.guestName ?? '');
        setStatus(nextPreview.currentStatus);
      })
      .catch((error: Error) => {
        setMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!token || !status || !guestName.trim()) {
      setMessage('Enter your name and choose an RSVP response.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const result = await submitRsvp({
        token,
        guestName: guestName.trim(),
        status,
      });
      setStatus(result.status);
      setMessage(`Your response is recorded: ${statusLabels[result.status]}.`);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : 'We could not record your response.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">CalendarCrew RSVP</p>
        <h1>Join the plan.</h1>

        {isLoading ? (
          <p className="lede">Checking your invitation…</p>
        ) : preview ? (
          <>
            <div className="story-card">
              <p className="card-kicker">Event details</p>
              <h2>{preview.event.title}</h2>
              <p className="lede">
                {formatEventWindow(preview.event.startsAt, preview.event.endsAt)}
              </p>
              {preview.event.location ? (
                <p className="lede">{preview.event.location}</p>
              ) : null}
              {preview.event.description ? (
                <p className="lede">{preview.event.description}</p>
              ) : null}
              {preview.event.hostLabel ? (
                <p className="lede">Hosted by {preview.event.hostLabel}</p>
              ) : null}
            </div>

            <form className="rsvp-form" onSubmit={handleSubmit}>
              <label htmlFor="guest-name">Your name</label>
              <input
                id="guest-name"
                name="guestName"
                onChange={(event) => setGuestName(event.target.value)}
                placeholder="Enter your name"
                required
                value={guestName}
              />

              <fieldset>
                <legend>Your response</legend>
                <div className="rsvp-options">
                  {(Object.keys(statusLabels) as RsvpStatus[]).map(
                    (option) => (
                      <label className="rsvp-option" key={option}>
                        <input
                          checked={status === option}
                          name="status"
                          onChange={() => setStatus(option)}
                          type="radio"
                          value={option}
                        />
                        <span>{statusLabels[option]}</span>
                      </label>
                    ),
                  )}
                </div>
              </fieldset>

              <button
                className="primary-action"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? 'Saving…' : 'Save RSVP'}
              </button>
            </form>
          </>
        ) : null}

        {message ? <p className="rsvp-message">{message}</p> : null}
      </section>
    </main>
  );
}
