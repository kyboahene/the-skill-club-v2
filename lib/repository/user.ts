import { PrismaService } from "@/prisma";

export class UserRepository {
    constructor(
        private prisma: PrismaService
    ) { }


}