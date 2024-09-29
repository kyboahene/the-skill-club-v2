import { z } from "zod"

export const jobFiltersSchema = z.object({
    roles: z.array(z.object({ id: z.string() })).refine(
        (roles) => {
            const roleIds = roles.map((role) => role.id);
            return new Set(roleIds).size === roleIds.length;
        },
        {
            message: "Each role must be unique",
        }
    ),
    jobTypes: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one job type.",
    }),
    mode: z.array(z.string()),
    location: z.string(),
    education: z.array(z.string()),
    jobCategory: z.array(z.string()),
    skills: z.array(z.object({ id: z.string() })),
});