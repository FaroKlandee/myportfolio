import { isRateLimited } from '@/app/lib/rate-limiter';
import { SessionData, sessionOptions } from '@/app/lib/session';
import { getIronSession } from 'iron-session';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('Contact form submission received');
  
  // Get client IP address
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             '127.0.0.1';
  
  console.log('Client IP:', ip);
  
  // Check rate limiting (10 requests per minute)
  if (isRateLimited(ip, 10, 60 * 1000)) {
    console.log('Rate limit exceeded for IP:', ip);
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }
  
  console.log('Getting iron session');
  try {
    // Get the cookie header from the request
    const cookieHeader = request.headers.get('cookie');
    console.log('Cookie header:', cookieHeader);
    
    // Create a response object to set cookies on
    const sessionResponse = NextResponse.json({});
    
    const session = await getIronSession<{ data?: SessionData }>(
      request,
      sessionResponse,
      sessionOptions
    );
    
    console.log('Session retrieved:', JSON.stringify({
      hasData: !!session.data,
      csrfToken: session.data?.csrfToken ? session.data.csrfToken.substring(0, 10) + '...' : 'missing'
    }));
    
    // Get form data
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const csrfToken = formData.get('csrf_token') as string;
    
    console.log('Form data received:', { name, email, message: message?.substring(0, 20) + '...' });
    console.log('CSRF token from form:', csrfToken ? csrfToken.substring(0, 10) + '...' : 'missing');

    // Validate CSRF token against the one stored in the session
    if (!session.data?.csrfToken) {
      console.error('No CSRF token in session');
      return NextResponse.json(
        { error: 'No CSRF token in session' },
        { status: 403 }
      );
    }
    
    if (csrfToken !== session.data.csrfToken) {
      console.error('CSRF token mismatch');
      console.error('Token from form (first 10 chars):', csrfToken ? csrfToken.substring(0, 10) : 'missing');
      console.error('Token in session (first 10 chars):', session.data.csrfToken ? session.data.csrfToken.substring(0, 10) : 'missing');
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      );
    }

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!name || name.trim() === '') {
      errors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!message || message.trim() === '') {
      errors.message = 'Message is required';
    } else if (message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    // Return validation errors if any
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // Forward to getform.io
    const getformEndpoint = process.env.NEXT_PUBLIC_GETFORM_ENDPOINT;
    if (!getformEndpoint) {
      return NextResponse.json(
        { error: 'Form submission endpoint not configured' },
        { status: 500 }
      );
    }

    const getformData = new FormData();
    getformData.append('name', name);
    getformData.append('email', email);
    getformData.append('message', message);

    const response = await fetch(getformEndpoint, {
      method: 'POST',
      body: getformData,
    });

    if (!response.ok) {
      throw new Error('Failed to submit form to getform.io');
    }

    // Log submission (in a real app, you might want to store this in a database)
    console.log(`Form submission from ${name} (${email}): ${message}`);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
