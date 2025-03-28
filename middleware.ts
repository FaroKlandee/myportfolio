import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone the response
  const response = NextResponse.next();

  // Add security headers
  const headers = response.headers;
  
  // Content Security Policy - Helps prevent XSS attacks
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://getform.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self' https://getform.io; frame-src 'self' https://drive.google.com;"
  );
  
  // X-Content-Type-Options - Prevents MIME type sniffing
  headers.set('X-Content-Type-Options', 'nosniff');
  
  // X-Frame-Options - Prevents clickjacking
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  
  // X-XSS-Protection - Additional XSS protection for older browsers
  headers.set('X-XSS-Protection', '1; mode=block');
  
  // Referrer-Policy - Controls how much referrer information is sent
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions-Policy - Limits which features and APIs can be used
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  
  // Strict-Transport-Security - Enforces HTTPS
  headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  return response;
}

// Specify which paths this middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
