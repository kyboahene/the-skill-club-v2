"use client";

import React from "react";
import Image from "next/image";
import { Event } from "@prisma/client";
import { useRouter } from "next/navigation";

type EventCardProps = {
  event: Event;
};

const EventCard = ({ event }: EventCardProps) => {
  const router = useRouter();

  function handleClick(title: string, id: string) {
    router.push(`/events/${title.replaceAll(" ", "-")}`);
  }

  return (
    <section
      className="bg-white rounded-[10px] md:w-[24em] overflow-hidden cursor-pointer"
      onClick={() => handleClick(event.title, event.id ? event.id : "")}
    >
      <div className="h-[15em] relative">
        <Image
          src={`${event?.image ? event.image : "/images/dummy.webp"}`}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          alt="event"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsXLK8HgAF5wJVnJv1MQAAAABJRU5ErkJggg=="
        />
        <div className="p-2 absolute top-0 right-0 bg-black text-amber-100">
          {event.category}
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-500 mb-3 text-sm">
          {new Date(event.date).toUTCString()}
        </p>
        <h1 className="font-bold text-xl">{event.title}</h1>

        <p className="mt-4 truncate">{event.description}</p>
      </div>
    </section>
  );
};

export default EventCard;
