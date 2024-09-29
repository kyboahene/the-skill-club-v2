import React from "react";
import Lottie from "react-lottie";

// lottie
import empty from "@/lottie/empty.json";

// lib
import { cn } from "@/lib/utils";
import { Message } from "@/lib/types/misc";
import { reactLottieConfig } from "@/lib/utils/react-lottie-config";

// shared
import { Skeleton } from "@/modules/shared/components/skeleton";

type MessagesListProps = {
  isLoading: boolean;
  data: Message[];
  selectedMessage?: Message;
  setSelectedMessage: (message: Message) => void;
};

const MessageList = ({
  isLoading,
  data,
  selectedMessage,
  setSelectedMessage,
}: MessagesListProps) => {
  function handleClick(message: Message) {
    setSelectedMessage(message);
  }

  if (isLoading) {
    return [1, 2, 3, 4, 5].map((i, index) => (
      <Skeleton key={index} className="h-20 w-full rounded-[15px]" />
    ));
  }

  return data && data.length > 0 ? (
    data.map((message, index) => {
      const truncatedDescription = message.description.substring(0, 70) + "...";

      return (
        <div
          key={index}
          onClick={() => handleClick(message)}
          className={cn(
            "border-t py-6 flex items-start gap-3 cursor-pointer transition-all duration-[0.5s]",
            {
              " bg-[#d6e6dd] p-5 rounded-[15px]":
                selectedMessage?.title === message.title,
            }
          )}
        >
          <div className="flex flex-col gap-2 overflow-hidden">
            <div className=" flex justify-between">
              <p className="font-bold">{message.senderDetails?.name}</p>
              <p className="text-gray-500">
                {message.timestamp.toDate().toDateString()}
              </p>
            </div>
            <h3 className="font-bold text-md">{message.title}</h3>
            <p
              className="text-gray-500 truncate"
              dangerouslySetInnerHTML={{
                __html: truncatedDescription,
              }}
            ></p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="flex flex-col justify-center">
      <Lottie options={reactLottieConfig(empty)} height={300} width={300} />
      <p className="text-center">You have not messages yet.</p>
    </div>
  );
};

export default MessageList;
