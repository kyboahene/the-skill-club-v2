"use client";

import dayjs from "dayjs";
import React, { useState } from "react";
import { Ellipsis, Search } from "lucide-react";
import relativeTime from "dayjs/plugin/relativeTime";

// lib
import { Message } from "@/lib/types/misc";

// component
import MessageList from "../../components/message-list";
import MessageDetails from "../../components/message-detail";

dayjs.extend(relativeTime);

const MessagesTemplate = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | undefined>();

  const isLoading = false;
  const data: Message[] = [];

  return (
    <section className="flex flex-col gap-8 my-12">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-2 flex justify-between items-center">
          <h1 className="header-font font-bold text-2xl">Messages</h1>

          {/* <span className="rounded-full p-2 bg-green">
                <Plus size={20} />
              </span> */}
        </div>
        <div className="col-span-4"></div>
      </div>

      <div className="bg-white rounded-[15px] grid grid-cols-1 lg:grid-cols-6">
        <div className="col-span-2 flex flex-col p-6 gap-4">
          <div className="flex justify-between items-center">
            <h1 className="header-font font-bold text-xl">Inbox</h1>
            <Ellipsis fontSize={20} className="cursor-pointer" />
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Search messages"
              className="rounded-[35px] bg-[#f0f5f3] py-3 px-4 border w-full"
            />

            <div className="absolute top-4 right-4">
              <Search size={18} />
            </div>
          </div>

          <MessageList
            data={data}
            isLoading={isLoading}
            selectedMessage={selectedMessage}
            setSelectedMessage={setSelectedMessage}
          />
        </div>
        <div className="col-span-4 border-l">
          <MessageDetails selectedMessage={selectedMessage} />
        </div>
      </div>
    </section>
  );
};

export default MessagesTemplate;
