import React from "react";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";

// layout
import Footer from "@/modules/layout/templates/footer";
import Navbar from "@/modules/layout/templates/main-nav";

// lib
import { getEventUseCase } from "@/lib/use-cases/event";

// component
import EventDetailSidebar from "../../components/event-detail-sidebar";

type EventDetailsTemplateProps = {
  eventId: string;
};

const EventPageTemplate = async ({ eventId }: EventDetailsTemplateProps) => {
  const event = await getEventUseCase(eventId);

  return (
    <main>
      <Navbar />
      <div className="container mx-auto md:w-5/6 pt-[10em] pb-[9em] px-[1em]">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-[2] flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl header-font font-bold hover:text-gray-500">
              {event?.title}
            </h1>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Calendar />
                <p>{new Date(event?.date ? event.date : "").toUTCString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <Tag />
                <p>{event?.category}</p>
              </div>
            </div>
            <div className="w-full h-[20em] md:h-[600px] relative rounded-[15px] overflow-hidden">
              <Image
                src={event?.image ? event.image : ""}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="event"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsXLK8HgAF5wJVnJv1MQAAAABJRU5ErkJggg=="
              />
            </div>

            <div className="mt-6 mb-8">{event?.description}</div>
          </div>
          <EventDetailSidebar event={event} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default EventPageTemplate;
