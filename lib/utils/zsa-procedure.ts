import { redirect } from "next/navigation";
import { createClient } from "@/supabase/server";
import { createServerActionProcedure } from "zsa";


import { AuthService } from "../services/auth";
import { AuthRepository } from "../repository/auth";


export const baseProcedure = createServerActionProcedure()
    .handler(() => {
        const authRepository = new AuthRepository()
        const authenticationService = new AuthService(authRepository)

        return { authenticationService }
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