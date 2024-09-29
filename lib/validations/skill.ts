import { z } from "zod"

export type ISkill = {
    id?: string
    name: string
    jobId: string
}

export const skillInputSchema = z.object({
    name: z.string(),
    icon: z.string()
})

export type SkillDto = z.infer<typeof skillInputSchema>