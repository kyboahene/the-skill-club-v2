import { EventCategory } from "@prisma/client"
import { z } from "zod"

export type ISkill = {
    id?: string
    name: string
    jobId: string
}

export const eventInputSchema = z.object({
    title: z.string(),
    image: z.string(),
    link: z.string(),
    date: z.date(),
    description: z.string(),
    category: z.nativeEnum(EventCategory)
})

export type EventDto = z.infer<typeof eventInputSchema>