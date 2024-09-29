"use server";

import { ZSAError } from "zsa";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import {
    signUpInputSchema,
    resetPasswordInputSchema,
    forgotPasswordInputSchema,
    signInWithPasswordInputSchema,
    signInWithProviderInputSchema,
} from "@/lib/validations/auth";
import { AuthError } from "@/lib/utils/errors";
import { baseProcedure } from "@/lib/utils/zsa-procedure";

export const signInWithPassword = baseProcedure.createServerAction()
    .input(signInWithPasswordInputSchema)
    .handler(async ({ ctx, input }) => {
        try {

            await ctx.authenticationService.signInWithPassword(
                input.email,
                input.password
            )

            redirect("/dashboard")
        } catch (err) {
            if (err instanceof AuthError) {
                throw new ZSAError('ERROR', err)
            }
        }
    })

export const signInWithProvider = baseProcedure.createServerAction()
    .input(signInWithProviderInputSchema)
    .handler(async ({ ctx, input }) => {
        const res = await ctx.authenticationService.signInWithProvider(input.provider)

        if (res && res.errors) {
            return res
        }

        revalidatePath('/dashboard', 'layout')
        redirect('/dashboard')
    })

export const signUp = baseProcedure.createServerAction()
    .input(signUpInputSchema)
    .handler(async ({ ctx, input }) => {
        try {
            await ctx.authenticationService.signUp(
                input.email,
                input.password
            )

            redirect("/talent/dashboard")
        } catch (err) {
            if (err instanceof AuthError) {
                throw new ZSAError('ERROR', err)
            }
        }
    })

export const resetPassword = baseProcedure.createServerAction()
    .input(resetPasswordInputSchema)
    .handler(async ({ ctx, input }) => {
        await ctx.authenticationService.resetPassword(input.password)

        redirect('/auth/login')
    })

export const forgotPassword = baseProcedure.createServerAction()
    .input(forgotPasswordInputSchema)
    .handler(async ({ ctx, input }) => {
        try {
            await ctx.authenticationService.forgotPassword(input.email)

        } catch (err) {
            if (err instanceof AuthError) {
                throw new ZSAError('ERROR', err)
            }
        }
    })