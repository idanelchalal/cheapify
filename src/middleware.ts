import { redirect } from 'next/navigation'
import { NextResponse, type NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // SIGN OUT ROUTE
  if (request.nextUrl.pathname.startsWith('/auth/signout')) {
    const hasSessionToken = request.cookies.has('next-auth.session-token')

    if (!hasSessionToken) {
      return NextResponse.rewrite(new URL('/', request.url))
    }

    const response = NextResponse.next()
    response.cookies.set({
      name: 'next-auth.session-token',
      value: '',
      expires: 1,
    })

    return response
  }
}
