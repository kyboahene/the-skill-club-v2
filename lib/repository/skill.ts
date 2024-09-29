import { prisma } from '@/prisma/client';

// validations
import { SkillDto } from './../validations/skill';

export async function createSkill(data: SkillDto) {
    return prisma.skill.create({
        data
    })
}

export async function findSkillById(skillId: string) {
    return prisma.skill.findUnique({
        where: { id: skillId }
    })
}

export async function findSkills(
    page: number = 1,
    pageSize: number = 10,
) {
    const skip = (page - 1) * pageSize;
    const [data, total] = await Promise.all([
        prisma.skill.findMany({
            include: { resource: true },
            skip,
            take: pageSize,
        }),
        prisma.resource.count(),
    ]);

    return {
        data,
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
    };
}

export async function updateSkill(skillId: string, data: Partial<SkillDto>) {
    return prisma.skill.update({
        where: { id: skillId },
        data
    })
}

export async function removeSkill(skillId: string) {
    return prisma.skill.delete({
        where: { id: skillId }
    })
}