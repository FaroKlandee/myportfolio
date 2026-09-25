import { sendContactEmail } from '@/app/lib/mailgun';
import { isRateLimited } from '@/app/lib/rate-limiter';
import { SessionData, sessionOptions } from '@/app/lib/session';
import { getIronSession } from 'iron-session';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Get client IP address
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             '127.0.0.1';
  
  // Check rate limiting (10 requests per minute)
  if (isRateLimited(ip, 10, 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }
  
  try {
    // Create a response object to set cookies on
    const sessionResponse = NextResponse.json({});
    
    const session = await getIronSession<{ data?: SessionData }>(
      request,
      sessionResponse,
      sessionOptions
    );
    
    // Get form data
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const csrfToken = formData.get('csrf_token') as string;

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

    // Send the message via Mailgun
    await sendContactEmail({ name, email, message });

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
