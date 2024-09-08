import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { env } from '@/env'

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        }
    })

    const supabase = createServerClient(
        env.SUPABASE_URL!,
        env.SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value,
                        ...options
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers
                        }
                    })
                    response.cookies.set({
                        name,
                        value,
                        ...options
                    })
                },
                remove(name: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers
                        }
                    })
                    response.cookies.set({
                        name,
                        value: '',
                        ...options
                    })
                }
            }
        }
    )

    const { data: user } = await supabase.auth.getUser()

    return { response, user }
}