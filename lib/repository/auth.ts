import { env } from "@/env";
import { createClient } from "@/supabase/server";
import { Provider, SupabaseClient } from "@supabase/supabase-js";

export class AuthRepository {
    private supabase: SupabaseClient;

    constructor() {
        this.supabase = createClient();
    }

    async signUp(email: string, password: string) {
        return this.supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${env.BASE_URL}/auth/callback`,
            },
        });
    }

    async loginWithPassword(email: string, password: string) {
        return this.supabase.auth.signInWithPassword({ email, password });
    }

    async oAuthSignIn(provider: Provider) {
        return this.supabase.auth.signInWithOAuth({ provider });
    }

    async forgotPassword(email: string, redirectTo: string) {
        return this.supabase.auth.resetPasswordForEmail(email, { redirectTo });
    }

    async resetPassword(password: string) {
        return this.supabase.auth.updateUser({ password });
    }
}