import React from "react";

// utils
import { categories } from "@/constants";

// lottie
import empty from "@/lottie/empty.json";

// component
import EventCard from "../../components/event-card";

// lib
import { getEventsUseCase } from "@/lib/use-cases/event";

// shared
import {
  Select,
  SelectItem,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/modules/shared/components/select";
import LottieAnimation from "@/modules/shared/components/lottie-animation";

const EventsPageTemplate = async () => {
  const events = await getEventsUseCase();

  return (
    <section className="py-16 md:py-36">
      <div className="container mx-auto lg:w-5/6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl header-font font-bold">Events</h1>
          <div className="md:w-1/3">
            <Select
            // onValueChange={field.onChange}
            // defaultValue={field.value}
            >
              <SelectTrigger className="bg-white flex-1 px-6 py-6">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {categories.map((category, index) => (
                    <SelectItem value={category} key={index}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {events && events?.data.length > 0 ? (
            events.data.map((event) => (
              <EventCard event={event} key={event.id} />
            ))
          ) : (
            <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-2 justify-center items-center">
              <div className="h-[20em] w-[20em]">
                <LottieAnimation animationData={empty} />
              </div>
              <h2 className="text-xl">
                There are no resources available. Please come back later
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsPageTemplate;
