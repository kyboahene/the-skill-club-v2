import { z } from "zod"

export const signInWithPasswordInputSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

export const signInWithProviderInputSchema = z.object({
    provider: z.string().min(1)
})

export const signUpInputSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string()
        .min(8, { message: 'Password must be at least 8 characters' })
})
    .superRefine(({ password, confirmPassword }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'The password did not match',
                path: ['password']
            })
            ctx.addIssue({
                code: 'custom',
                message: 'The password did not match',
                path: ['confirmPassword']
            })
        }
    })


export const forgotPasswordInputSchema = z.object({
    email: z.string().email('Invalid email')
})

export const resetPasswordInputSchema = z.object({
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string()
        .min(8, { message: 'Password must be at least 8 characters' })
})
    .superRefine(({ password, confirmPassword }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'The password did not match',
                path: ['password']
            })
            ctx.addIssue({
                code: 'custom',
                message: 'The password did not match',
                path: ['confirmPassword']
            })
        }
    })