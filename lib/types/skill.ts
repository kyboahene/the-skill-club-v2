import {
    Prisma, Skill
} from "@prisma/client"

export type SkillParams = {
    where: Prisma.SkillWhereInput,
    cursor?: Prisma.SkillWhereUniqueInput,
    orderBy?: Prisma.SkillOrderByWithAggregationInput,
    distinct?: Prisma.SkillScalarFieldEnum
}

export type SkillWithResourceType = Skill & Prisma.SkillGetPayload<{
    include: {
        resource: true
    }
}>