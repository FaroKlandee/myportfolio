/**
 * Minimal Mailgun client using the HTTP API (no SDK dependency).
 *
 * Required env vars:
 *   MAILGUN_API_KEY   - Private API key from the Mailgun dashboard
 *   MAILGUN_DOMAIN    - Sending domain, e.g. mg.yourdomain.com
 *
 * Optional env vars:
 *   MAILGUN_API_URL   - Defaults to https://api.mailgun.net (use https://api.eu.mailgun.net for EU domains)
 *   MAILGUN_FROM      - Defaults to "Portfolio Contact <postmaster@MAILGUN_DOMAIN>"
 *   CONTACT_TO_EMAIL  - Recipient; defaults to NEXT_PUBLIC_CONTACT_EMAIL
 */

export interface ContactEmail {
  name: string;
  email: string;
  message: string;
}

// Strip CR/LF so user input can't inject extra email headers
const sanitizeHeader = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

export async function sendContactEmail({ name, email, message }: ContactEmail): Promise<void> {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const to = process.env.CONTACT_TO_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  if (!apiKey || !domain || !to) {
    throw new Error('Mailgun is not configured (MAILGUN_API_KEY, MAILGUN_DOMAIN and CONTACT_TO_EMAIL are required)');
  }

  const apiUrl = process.env.MAILGUN_API_URL || 'https://api.mailgun.net';
  const from = process.env.MAILGUN_FROM || `Portfolio Contact <postmaster@${domain}>`;
  const safeName = sanitizeHeader(name);
  const safeEmail = sanitizeHeader(email);

  const body = new FormData();
  body.append('from', from);
  body.append('to', to);
  body.append('subject', `New portfolio message from ${safeName}`);
  body.append('text', `Name: ${safeName}\nEmail: ${safeEmail}\n\n${message}`);
  body.append('h:Reply-To', `${safeName} <${safeEmail}>`);

  const response = await fetch(`${apiUrl}/v3/${domain}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
    },
    body,
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`Mailgun request failed (${response.status}): ${detail}`);
  }
}
