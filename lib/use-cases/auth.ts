import { Provider } from "@supabase/supabase-js";
import { AuthRepository } from "../repository/auth";
import { env } from "@/env";
import { AuthError } from "../utils/errors";

export class AuthService {
    private providers: Provider[] = ['google', 'linkedin'];

    constructor(private auth: AuthRepository) { }

    async signInWithProvider(provider: string) {
        if (!this.providers.some(p => p === provider)) {
            throw new Error('Provider not supported');
        }
        const redirectTo = env.BASE_URL + 'api/auth/callback';
        const { data, error } = await this.auth.oAuthSignIn(provider as Provider);
        if (error) {
            return {
                errors: error.message
            };
        }
        return { data };
    }

    async signInWithPassword(email: string, password: string) {
        const { error } = await this.auth.loginWithPassword(email, password);
        if (error) {
            throw new AuthError(error.message, error.status, { cause: error.cause });
        }
    }

    async signUp(email: string, password: string) {
        const { error } = await this.auth.signUp(email, password);
        if (error) {
            throw new AuthError(error.message, error.status, { cause: error.cause });
        }
    }

    async forgotPassword(email: string) {
        const redirectTo = env.BASE_URL + 'auth/reset-password';
        const { error } = await this.auth.forgotPassword(email, redirectTo);
        if (error) {
            throw new Error("Unable to reset password: " + error.message);
        }
    }

    async resetPassword(password: string) {
        const { error } = await this.auth.resetPassword(password);
        if (error) {
            throw new Error('Cannot reset password: ' + error.message);
        }
    }
}