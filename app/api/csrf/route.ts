import { SessionData, sessionOptions } from '@/app/lib/session';
import crypto from 'crypto';
import { getIronSession } from 'iron-session';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const session = await getIronSession<{ data?: SessionData }>(
      request,
      NextResponse.next(),
      sessionOptions
    );

    // Generate a new CSRF token
    const csrfToken = crypto.randomBytes(32).toString('hex');
    
    // Store the token in the session
    if (!session.data) {
      session.data = {};
    }
    session.data.csrfToken = csrfToken;
    
    // Save the session
    await session.save();
    
    // Return the token to the client
    return NextResponse.json({ csrfToken });
  } catch (error) {
    console.error('Error generating CSRF token:', error);
    return NextResponse.json(
      { error: 'Failed to generate CSRF token' },
      { status: 500 }
    );
  }
}
