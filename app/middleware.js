import { NextResponse } from "next/server"
import { routeLinks } from '@/app/_libs/links';
// import { cookies } from 'next/headers'

export async function middleware(request) {
    const response = NextResponse.next()
    const url = request.nextUrl;
    const pathname = url.pathname;
    const cookie = request.cookies.get('token')?.value
    if (cookie) {
        var session = cookie
    }
    else {
        var session = null
    }

    // if (pathname === 'auth/login' || pathname === 'auth/register') {
    //     return response; // Allow access without authentication
    // }
    if (!session) {
        return NextResponse.redirect(
            new URL(routeLinks.home, request.url)
        )
    }
    return NextResponse.next()
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|auth).*)',
}