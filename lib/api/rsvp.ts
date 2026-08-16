import {
  getPublicSupabaseAnonKey,
  getRsvpEndpoint,
} from '../config/public-runtime';

export type RsvpStatus = 'going' | 'maybe' | 'cant_go';

export type RsvpEvent = {
  title: string;
  startsAt: string;
  endsAt: string | null;
  location: string | null;
  description: string | null;
  hostLabel: string | null;
};

export type RsvpPreview = {
  event: RsvpEvent;
  currentStatus: RsvpStatus | null;
  guestName: string | null;
};

type RsvpPreviewResponse = {
  event: RsvpEvent;
  currentStatus?: RsvpStatus | null;
  guestName?: string | null;
};

async function request<T>(payload: Record<string, unknown>): Promise<T> {
  const endpoint = getRsvpEndpoint();

  if (!endpoint) {
    throw new Error('RSVP service is not configured.');
  }

  const anonKey = getPublicSupabaseAnonKey();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (anonKey) {
    headers.apikey = anonKey;
    headers.Authorization = `Bearer ${anonKey}`;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(
      response.status === 404
        ? 'This RSVP link is not valid.'
        : 'The RSVP service could not complete the request.',
    );
  }

  return (await response.json()) as T;
}

export async function fetchRsvpPreview(token: string): Promise<RsvpPreview> {
  const payload = await request<RsvpPreviewResponse>({
    action: 'preview',
    token,
  });

  return {
    event: payload.event,
    currentStatus: payload.currentStatus ?? null,
    guestName: payload.guestName ?? null,
  };
}

export async function submitRsvp({
  token,
  guestName,
  status,
}: {
  token: string;
  guestName: string;
  status: RsvpStatus;
}): Promise<{ status: RsvpStatus }> {
  return request<{ status: RsvpStatus }>({
    action: 'respond',
    token,
    guestName,
    status,
  });
}
