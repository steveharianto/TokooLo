import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define which routes require authentication
export const protectedRoutes = ["/menu", "/cart", "/profile", "/"]

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("isLoggedIn")

  if (
    protectedRoutes.includes(request.nextUrl.pathname) && 
    (!currentUser || currentUser.value !== "true")
  ) {
    request.cookies.delete("isLoggedIn")
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// The matcher must be a static array
export const config = {
  matcher: ['/menu', '/cart', '/profile', '/']
} 