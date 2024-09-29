import { prisma } from '@/prisma/client';

// validations
import { EventDto } from './../validations/event';

export async function createEvent(data: EventDto) {
    return prisma.event.create({
        data
    })
}

export async function findEventById(eventId: string) {
    return prisma.event.findUnique({
        where: { id: eventId }
    })
}

export async function findEvents(
    page: number = 1,
    pageSize: number = 10,
) {
    const skip = (page - 1) * pageSize;
    const [data, total] = await Promise.all([
        prisma.event.findMany({
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

export async function updateEvent(eventId: string, data: Partial<EventDto>) {
    return prisma.event.update({
        where: { id: eventId },
        data
    })
}

export async function removeEvent(eventId: string) {
    return prisma.event.delete({
        where: { id: eventId }
    })
}