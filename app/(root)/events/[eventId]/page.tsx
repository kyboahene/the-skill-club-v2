import React from "react";

// modules
import EventPageTemplate from "@/modules/events/templates/event-page-template";

const EventPage = ({ params }: { params: { eventId: string } }) => {
  return <EventPageTemplate eventId={params.eventId} />;
};

export default EventPage;
