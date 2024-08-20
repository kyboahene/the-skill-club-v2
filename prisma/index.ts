import { PrismaClient } from "@prisma/client";
export type * from "@prisma/client";

export class PrismaService {
    private static instance: PrismaClient;

    private constructor() { }

    public static getInstance(): PrismaClient {
        if (!PrismaService.instance) {
            PrismaService.instance = new PrismaClient();
            if (process.env.NODE_ENV !== "production") {
                (globalThis as any).prisma = PrismaService.instance;
            }
        }
        return PrismaService.instance;
    }
}

export const prisma = PrismaService.getInstance();
