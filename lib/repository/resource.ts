import { prisma } from '@/prisma/client';

// validations
import { ResourceDto } from './../validations/resource';


export async function createResource(data: ResourceDto) {
    return prisma.resource.create({
        data
    });
}

export async function findResources() {
    return prisma.resource.findMany({
        include: {
            skill: true
        }
    })
}

export async function findResourceById(resourceId: string) {
    return prisma.resource.findUnique({
        where: { id: resourceId }
    });
}

export async function findResourceBySkillId(skillId: string) {
    return prisma.resource.findMany({
        where: { skillId },
        include: {
            skill: true
        }
    });
}

export async function updateResource(resourceId: string, data: Partial<ResourceDto>) {
    return prisma.resource.update({
        where: { id: resourceId },
        data
    });
}

export async function removeResource(resourceId: string) {
    return prisma.resource.delete({
        where: { id: resourceId }
    });
}