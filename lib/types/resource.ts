import {
    Prisma, Resource
} from "@prisma/client"

export type ResourceParams = {
    where: Prisma.ResourceWhereInput,
    cursor?: Prisma.ResourceWhereUniqueInput,
    orderBy?: Prisma.ResourceOrderByWithAggregationInput,
    distinct?: Prisma.ResourceScalarFieldEnum
}

export type ResourceWithSkillType = Resource & Prisma.ResourceGetPayload<{
    include: {
        skill: true
    }
}>