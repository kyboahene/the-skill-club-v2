import { Event } from "@prisma/client";

// validations
import { EventDto } from "../validations/event";

// repository
import {
    findEvents,
    createEvent,
    updateEvent,
    removeEvent,
    findEventById,
} from "../repository/event";

// types
import { PaginatedResult } from "../types/misc";


export async function createSkillUseCase(data: EventDto): Promise<Event> {
    const createdEvent = await createEvent(data)

    return createdEvent
}

export async function getEventsUseCase(): Promise<PaginatedResult<Event>> {
    try {
        const events = await findEvents()

        return events
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getEventUseCase(eventId: string): Promise<Event | null> {
    try {
        const skill = await findEventById(eventId)

        return skill
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function updateSkillUseCase(eventId: string, data: Partial<EventDto>): Promise<Event> {
    try {
        const existingEvent = await getEventUseCase(eventId)
        if (!existingEvent)
            throw new Error("Resource not found")

        const event = await updateEvent(eventId, data)
        return event
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function deleteEventUseCase(eventId: string): Promise<Event | null> {
    try {
        const existingEvent = await getEventUseCase(eventId)
        if (!existingEvent)
            throw new Error("Event not found")

        const resource = await removeEvent(eventId)
        return resource
    } catch (error: any) {
        throw new Error(error)
    }
}