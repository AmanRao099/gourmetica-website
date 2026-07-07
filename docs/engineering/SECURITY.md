# Security Guidelines

## 1. Environment Variables
- Never prefix sensitive environment variables with `NEXT_PUBLIC_`.
- `NEXT_PUBLIC_` is strictly reserved for values that are safe to expose to the browser (e.g., public API keys for analytics).
- All sensitive tokens (CMS write tokens, secret keys) must remain server-side only.

## 2. Content Security Policy (CSP)
- The platform will enforce a strict CSP in production.
- No inline scripts are permitted without nonces or hashes, except where explicitly whitelisted for trusted third-party analytics.

## 3. CMS Permissions
- Ensure read-only tokens are used for data fetching on the front end.
- Server Actions mutating data must validate user authorization/authentication before acting.

## 4. Authentication Boundaries
- Any protected route or API endpoint must explicitly check for an active session. Do not assume client-side middleware routing is sufficient for API protection.
