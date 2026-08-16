function normalizeUrl(value: string): string {
  return new URL(value).toString().replace(/\/$/, '');
}

export function getRsvpEndpoint(): string | null {
  const configuredEndpoint = process.env.NEXT_PUBLIC_RSVP_ENDPOINT?.trim();

  if (configuredEndpoint) {
    return normalizeUrl(configuredEndpoint);
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();

  if (!supabaseUrl) {
    return null;
  }

  return `${normalizeUrl(supabaseUrl)}/functions/v1/guest-rsvp`;
}

export function getPublicSupabaseAnonKey(): string | null {
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  return anonKey || null;
}
