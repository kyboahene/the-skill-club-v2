import React from "react";
import { Metadata } from "next";

import MessagesTemplate from "@/modules/talent-dashboard/templates/messages-template";

export const metadata: Metadata = {
  title: "Messages",
};

const Messages = () => {
  return <MessagesTemplate />;
};

export default Messages;
