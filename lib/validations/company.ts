import { z } from "zod";

export const companyProfileInputSchema = z.object({
    name: z.string(),
    email: z.string().email("Invalid email"),
    website: z.string(),
    foundedDate: z.date(),
    companySize: z.string(),
    companyType: z.string(),
    market: z.string().optional(),
    overview: z.string().optional(),
    linkedIn: z.string().optional(),
    twitter: z.string().optional(),
    country: z.string().optional(),
    address: z.string().optional()
})

export const createJobSchema = z.object({
    title: z.string(),
    summary: z.string(),
    type: z.string(),
    category: z.string(),
    salary: z.string(),
    minPay: z.number(),
    maxPay: z.number(),
    responsibilities: z.string(),
    requirements: z.string(),
    education: z.string(),
    workLocation: z.string(),
    experience: z.string()
})