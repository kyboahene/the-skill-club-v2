import { env } from "@/env"
import { createClient } from "@/supabase/server"
import { Provider, SupabaseClient } from "@supabase/supabase-js"

export class AuthRepository {
    private supabase: SupabaseClient

    constructor() {
        this.supabase = createClient()
    }

    signUp(email: string, password: string) {
        return this.supabase.auth.signUp({
            email, password, options: {
                emailRedirectTo: `${env.BASE_URL}/auth/callback`
            }
        })
    }

    loginWithPassword(email: string, password: string) {
        return this.supabase.auth.signInWithPassword({ email, password })
    }

    oAuthSignIn(provider: Provider) {
        return this.supabase.auth.signInWithOAuth({ provider })
    }

    forgotPassword(email: string, redirectTo: string) {
        return this.supabase.auth.resetPasswordForEmail(email, { redirectTo })
    }

    resetPassword(password: string) {
        return this.supabase.auth.updateUser({
            password
        })
    }
}