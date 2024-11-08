import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define which routes require authentication
export const protectedRoutes = ["/menu", "/cart", "/profile", "/"]  // add whatever routes you want to protect

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

export const config = {
  matcher: protectedRoutes
} 