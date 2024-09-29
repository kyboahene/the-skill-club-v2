import { Resource } from "@prisma/client";

// repository
import {
    findResources,
    createResource,
    removeResource,
    updateResource,
    findResourceById,
} from "../repository/resource";
import { findSkillById } from "../repository/skill";

// validation
import { ResourceDto } from "../validations/resource";


export async function createResourceUseCase(data: ResourceDto): Promise<Resource> {
    try {
        const skill = await findSkillById(data.skillId)
        if (!skill)
            throw new Error('Skill not found')

        const createdResource = await createResource(data)

        return createdResource
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getResourcesUseCase(): Promise<Resource[]> {
    try {
        const resources = await findResources()

        return resources
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getResourceUseCase(resourceId: string): Promise<Resource | null> {
    try {
        const resource = await findResourceById(resourceId)

        return resource
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function updateResourceUseCase(resourceId: string, data: Partial<ResourceDto>): Promise<Resource> {
    try {
        const existingResource = await getResourceUseCase(resourceId)
        if (!existingResource)
            throw new Error("Resource not found")

        const resource = await updateResource(resourceId, data)
        return resource
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function deleteResourceUseCase(resourceId: string): Promise<Resource | null> {
    try {
        const existingResource = await getResourceUseCase(resourceId)
        if (!existingResource)
            throw new Error("Resource not found")

        const resource = await removeResource(resourceId)
        return resource
    } catch (error: any) {
        throw new Error(error)
    }
}