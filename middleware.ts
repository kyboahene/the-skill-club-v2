import { NextResponse, type NextRequest } from "next/server"
import { updateSession } from "@/supabase/middleware"

const protectedRoutes: string[] = ['/dashboard']

export async function middleware(request: NextRequest) {
    let { user, response } = await updateSession(request)

    if (!user && protectedRoutes.some(pr => request.nextUrl.pathname.startsWith(pr))) {
        response = NextResponse.redirect(new URL('/auth/login', request.url))
    } else {
        response = NextResponse.next()
    }

    return response
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)']
}