import { AuthError } from "@/lib/utils/auth-error"
import { baseProcedure } from "@/lib/utils/zsa-procedure"
import { ZSAError } from "zsa"

export const forgotPassword = baseProcedure.createServerAction()
    .input()
    .handler(async ({ ctx, input }) => {
        try {
            await ctx.authenticationService.forgotPassword(input.email)

        } catch (err) {
            if (err instanceof AuthError) {
                throw new ZSAError('ERROR', err)
            }
        }
    })