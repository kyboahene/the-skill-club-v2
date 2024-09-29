import { Skill } from "@prisma/client";

// validations
import { SkillDto } from "../validations/skill";

// repository
import {
    findSkills,
    createSkill,
    removeSkill,
    updateSkill,
    findSkillById,
} from "../repository/skill";

// types
import { PaginatedResult } from "../types/misc";
import { SkillWithResourceType } from "../types/skill";


export async function createSkillUseCase(data: SkillDto): Promise<Skill> {
    const createdSkill = await createSkill(data)

    return createdSkill
}

export async function getSkillsUseCase(): Promise<PaginatedResult<SkillWithResourceType>> {
    try {
        const skills = await findSkills()

        return skills
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getSkillUseCase(SkillId: string): Promise<Skill | null> {
    try {
        const skill = await findSkillById(SkillId)

        return skill
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function updateSkillUseCase(SkillId: string, data: Partial<SkillDto>): Promise<Skill> {
    try {
        const existingResource = await getSkillUseCase(SkillId)
        if (!existingResource)
            throw new Error("Resource not found")

        const resource = await updateSkill(SkillId, data)
        return resource
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function deleteSkillUseCase(SkillId: string): Promise<Skill | null> {
    try {
        const existingResource = await getSkillUseCase(SkillId)
        if (!existingResource)
            throw new Error("Skill not found")

        const resource = await removeSkill(SkillId)
        return resource
    } catch (error: any) {
        throw new Error(error)
    }
}