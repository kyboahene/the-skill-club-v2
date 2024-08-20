import { createClient } from "@/supabase/server"
import { Provider } from "@supabase/supabase-js"

export class AuthRepository {
    supabase = createClient()

    constructor() { }

    signUpWithEmail(email: string, password: string) {
        return this.supabase.auth.signUp({ email, password })
    }

    loginWithEmail(email: string, password: string) {
        return this.supabase.auth.signInWithPassword({ email, password })
    }

    oAuthSignIn(provider: Provider, redirectUrl: string) {
        return this.supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: redirectUrl,
            }
        })
    }
}