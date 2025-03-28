/**
 * Simple in-memory rate limiter
 * 
 * In a production environment, you would want to use a more robust solution
 * that uses Redis or another distributed cache to track rate limits across
 * multiple server instances.
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// Store rate limit records in memory
// Key is IP address, value is rate limit record
const rateLimitStore = new Map<string, RateLimitRecord>();

// Clean up expired rate limit records every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (record.resetTime <= now) {
      rateLimitStore.delete(key);
    }
  }
}, 10 * 60 * 1000);

/**
 * Check if a request is rate limited
 * 
 * @param ip The IP address to check
 * @param limit The maximum number of requests allowed in the time window
 * @param windowMs The time window in milliseconds
 * @returns Whether the request is rate limited
 */
export function isRateLimited(
  ip: string,
  limit: number = 10,
  windowMs: number = 60 * 1000
): boolean {
  const now = Date.now();
  
  // Get or create rate limit record
  let record = rateLimitStore.get(ip);
  if (!record) {
    record = {
      count: 0,
      resetTime: now + windowMs,
    };
    rateLimitStore.set(ip, record);
  }
  
  // Reset count if window has expired
  if (record.resetTime <= now) {
    record.count = 0;
    record.resetTime = now + windowMs;
  }
  
  // Increment count and check if rate limited
  record.count += 1;
  return record.count > limit;
}
