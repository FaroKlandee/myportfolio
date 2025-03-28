import { SessionOptions } from 'iron-session';

// This is where you would set your secret key for encrypting the session
// In production, use a strong, unique secret from environment variables
export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET || 'zK$8j2*P#Rv!LmXq6JE9bW@hY3TnG7fC',
  cookieName: 'myportfolio_session',
  cookieOptions: {
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
};

// Define the session data structure
export interface SessionData {
  csrfToken?: string;
  isLoggedIn?: boolean;
}

// Declare the session shape for TypeScript
declare module 'iron-session' {
  interface IronSessionData {
    data?: SessionData;
  }
}
