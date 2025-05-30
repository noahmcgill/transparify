import NextAuth from "next-auth";
import { authConfig } from "./server/auth/config";

export const { auth: middleware } = NextAuth(authConfig);

/*
 * Middleware Configuration:
 * This matcher ensures that the middleware runs on all pages except the following:
 * - API routes ("/api/*")
 * - Next.js static files ("/_next/static/*")
 * - Next.js images ("/_next/image/*")
 * - The favicon ("/favicon.ico")
 * - The login page ("/login")
 * - The homepage ("/")
 */
export const config = {
  matcher: [
    // disables auth middleware for pages that match the regex pattern
    // disabling for now because all pages should be visable to anyone
    // "/((?!api|_next/static|_next/image|favicon.ico|login|claim|signup|$).*)",
  ],
};
