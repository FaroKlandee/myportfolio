# Portfolio Website Security Guide

This guide provides an overview of the security measures implemented in this portfolio website and instructions for developers on maintaining and improving security.

## Security Features

The following security features have been implemented:

1. **Environment Variables**: Sensitive information is stored in environment variables
2. **CSRF Protection**: Form submissions are protected against Cross-Site Request Forgery
3. **Security Headers**: Comprehensive security headers are implemented via middleware
4. **Form Security**: Client and server-side validation with rate limiting
5. **External Link Protection**: External links use proper security attributes

## Setup Instructions

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_CONTACT_PHONE=+1234567890

# External Services
NEXT_PUBLIC_GETFORM_ENDPOINT=https://getform.io/f/your-form-id

# Social Media
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/your-username
NEXT_PUBLIC_CV_URL=https://your-cv-url.com

# Security
SESSION_SECRET=your-secure-random-string-at-least-32-chars
```

Replace the placeholder values with your actual information. For `SESSION_SECRET`, generate a secure random string of at least 32 characters.

### Security Headers

The security headers are configured in `middleware.ts`. Review and update the Content Security Policy (CSP) as needed when adding new external resources or features.

### CSRF Protection

CSRF protection is implemented using iron-session. The configuration is in `app/lib/session.ts`. The API endpoint for generating CSRF tokens is at `app/api/csrf/route.ts`.

### Rate Limiting

Rate limiting is implemented in `app/lib/rate-limiter.ts`. By default, it limits to 10 requests per minute per IP address. Adjust these values as needed.

## Development Guidelines

### Adding New Forms

When adding new forms:

1. Fetch a CSRF token from `/api/csrf`
2. Include the token in a hidden field named `csrf_token`
3. Submit the form to a server-side API endpoint
4. Validate the CSRF token on the server
5. Implement both client and server-side validation
6. Apply rate limiting to prevent abuse

Example:

```tsx
// Client-side
const [csrfToken, setCsrfToken] = useState("");

useEffect(() => {
  const fetchCsrfToken = async () => {
    const response = await fetch("/api/csrf");
    const data = await response.json();
    setCsrfToken(data.csrfToken);
  };
  fetchCsrfToken();
}, []);

// In your form
<input type="hidden" name="csrf_token" value={csrfToken} />;
```

### Adding External Links

When adding external links, always include proper security attributes:

```tsx
<a
  href="https://external-site.com"
  target="_blank"
  rel="noopener noreferrer nofollow"
>
  Link Text
</a>
```

### Updating Security Headers

When adding new features that require external resources, update the Content Security Policy in `middleware.ts`:

```typescript
headers.set(
  "Content-Security-Policy",
  "default-src 'self'; script-src 'self' 'unsafe-inline' https://trusted-script-source.com; ..."
);
```

## Security Testing

Before deploying changes, test the security of your application:

1. Verify all forms are protected with CSRF tokens
2. Check that all external links have proper security attributes
3. Test rate limiting by making multiple rapid requests
4. Validate that environment variables are properly used
5. Ensure security headers are correctly applied (use [securityheaders.com](https://securityheaders.com))

## Additional Resources

For more detailed information about the security measures and recommendations for further improvements, see the [SECURITY.md](./SECURITY.md) file.

## Reporting Security Issues

If you discover a security vulnerability, please contact [security@example.com](mailto:security@example.com). Do not disclose security vulnerabilities publicly until they have been addressed.
