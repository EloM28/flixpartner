import { NextResponse } from "next/server"
// import { cookies } from 'next/headers'

export async function middleware(request) {
    const response = NextResponse.next()
    const url = request.nextUrl;
    const pathname = url.pathname;
    const cookie = request.cookies.get('token-teramapartrner')?.value
    // console.log('cookie', cookie, request.url)
    if (cookie) {
        var session = cookie
    } else {
        var session = null
    }

    // if (!session) {
    //     return NextResponse.redirect(
    //         new URL('/', request.url)
    //     )
    // }
    return NextResponse.next()
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|client/login|client/register).*)',
}