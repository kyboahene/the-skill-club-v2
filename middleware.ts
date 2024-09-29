import { NextResponse, type NextRequest } from "next/server"
import { updateSession } from "@/supabase/middleware"

const protectedRoutes: string[] = ['/dashboard', '/company', '/admin'];

export async function middleware(request: NextRequest) {
    let { user, response } = await updateSession(request);

    if (!user && protectedRoutes.some(pr => request.nextUrl.pathname.startsWith(pr))) {
        let redirectUrl = '/auth/login';
        if (request.nextUrl.pathname.startsWith('/dashboard')) {
            redirectUrl = '/auth/login?redirect=/dashboard';
        } else if (request.nextUrl.pathname.startsWith('/company')) {
            redirectUrl = '/auth/login?redirect=/company';
        } else if (request.nextUrl.pathname.startsWith('/admin')) {
            redirectUrl = '/auth/login?redirect=/admin';
        }
        response = NextResponse.redirect(new URL(redirectUrl, request.url));
    } else {
        response = NextResponse.next();
    }

    return response;
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};