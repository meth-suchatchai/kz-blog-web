import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('Middleware triggered for path:', request.nextUrl.pathname);

  // if (request.nextUrl.pathname.startsWith('/admin')) {
  //   const token = request.cookies.get('token')?.value;
  //   if (!token) {
  //     return NextResponse.redirect(new URL('/', request.url));
  //   }
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
