import { ResourceType } from "@prisma/client";
import { z } from "zod";

export const resourceInputSchema = z.object({
    link: z.string().min(1).max(50),
    title: z.string().min(1).max(50),
    description: z.string().min(1).max(50),
    type: z.nativeEnum(ResourceType),
    skillId: z.string().min(1).max(50)
})

export type ResourceDto = z.infer<typeof resourceInputSchema>