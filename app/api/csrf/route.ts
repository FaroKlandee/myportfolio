import { SessionData, sessionOptions } from '@/app/lib/session';
import crypto from 'crypto';
import { getIronSession } from 'iron-session';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    console.log('CSRF token request received');
    
    // Create a response object to set cookies on
    const response = NextResponse.json({});
    
    const session = await getIronSession<{ data?: SessionData }>(
      request,
      response,
      sessionOptions
    );
    
    console.log('Session before modification:', JSON.stringify({
      hasData: !!session.data,
      csrfToken: session.data?.csrfToken ? 'exists' : 'missing'
    }));

    // Generate a new CSRF token
    const csrfToken = crypto.randomBytes(32).toString('hex');
    console.log('Generated CSRF token (first 10 chars):', csrfToken.substring(0, 10));
    
    // Store the token in the session
    if (!session.data) {
      session.data = {};
      console.log('Created new session.data object');
    }
    session.data.csrfToken = csrfToken;
    
    // Save the session
    console.log('Saving session...');
    await session.save();
    console.log('Session saved');
    
    // Verify the token was saved
    console.log('Session after save:', JSON.stringify({
      hasData: !!session.data,
      csrfToken: session.data?.csrfToken ? session.data.csrfToken.substring(0, 10) + '...' : 'missing'
    }));
    
    // Return the token to the client with the session cookie
    return NextResponse.json({ csrfToken }, {
      headers: response.headers
    });
  } catch (error) {
    console.error('Error generating CSRF token:', error);
    return NextResponse.json(
      { error: 'Failed to generate CSRF token' },
      { status: 500 }
    );
  }
}
