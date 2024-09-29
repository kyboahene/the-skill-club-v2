import {
    Prisma, User
} from "@prisma/client"

export type UserParams = {
    where: Prisma.UserWhereInput,
    cursor?: Prisma.UserWhereUniqueInput,
    orderBy?: Prisma.UserOrderByWithAggregationInput,
    distinct?: Prisma.UserScalarFieldEnum
}

export type UserWithTalentOrCompanyType = User & Prisma.UserGetPayload<{
    include: {
        talent: true,
        company: true,
    }
}>