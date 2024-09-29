import { redirect } from "next/navigation";
import { createClient } from "@/supabase/server";
import { createServerActionProcedure } from "zsa";

import { rateLimitByKey } from "./limiter";
import { AuthService } from "../use-cases/auth";
import { AuthRepository } from "../repository/auth";


export const baseProcedure = createServerActionProcedure()
    .handler(() => {
        const authRepository = new AuthRepository()
        const authenticationService = new AuthService(authRepository)

        // const resourceRepository = new ResourceRepository()

        return { authenticationService }
    })


export const unauthenticatedProcedure = createServerActionProcedure()
    .handler(async () => {
        await rateLimitByKey({
            key: `unauthenticated-global`,
            limit: 10,
            window: 10000,
        });
    })

export const authenticatedProcedure = createServerActionProcedure()
    .handler(async ({ ctx }) => {
        const supabase = createClient()
        const { data: { user }, error: userError } = await supabase.auth.getUser()

        if (userError || !user) {
            redirect("/login")
        }

        return { user, supabase, ctx }
    })