import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        NODE_ENV: z.string().optional(),
        DATABASE_URL: z.string().min(1),
        BASE_URL: z.string().min(1),
        APP_IMG: z.string().min(1),
        DIRECT_URL: z.string().min(1),
        SUPABASE_URL: z.string().min(1),
        SUPABASE_ANON_KEY: z.string().min(1),
        SERVICE_ROLE_KEY: z.string().min(1),
        SHEET_API: z.string().min(1),
        SHEET_COMPANY_API: z.string().min(1),
        EMAIL_SERVICE_ID: z.string().min(1),
        EMAIL_TEMPLATE_ID: z.string().min(1),
        EMAIL_USER_ID: z.string().min(1),
        TAWK_TO_ID: z.string().min(1)
    },
    client: {

    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
        APP_IMG: process.env.NEXT_PUBLIC_APP_IMG,
        DIRECT_URL: process.env.DIRECT_URL,
        SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        SERVICE_ROLE_KEY: process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY,
        SHEET_API: process.env.SHEET_API,
        SHEET_COMPANY_API: process.env.SHEET_COMPANY_API,
        EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
        EMAIL_USER_ID: process.env.EMAIL_USER_ID,
        TAWK_TO_ID: process.env.TAWK_TO_ID
    }
})