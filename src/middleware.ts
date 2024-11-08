import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Add routes that require authentication
const protectedRoutes = ["/menu"];

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("isLoggedIn");

  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    (!currentUser || currentUser.value !== "true")
  ) {
    request.cookies.delete("isLoggedIn");
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("isLoggedIn");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/menu"],
} 