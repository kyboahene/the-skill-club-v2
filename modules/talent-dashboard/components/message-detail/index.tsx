import { Message } from "@/lib/types/misc";
import dayjs from "dayjs";
import Lottie from "react-lottie";

import { EllipsisVertical, Trash } from "lucide-react";
import React from "react";

import empty from "@/lottie/empty.json";

import { reactLottieConfig } from "@/lib/utils/react-lottie-config";

type MessageDetailProps = {
  selectedMessage?: Message;
};

const MessageDetails = ({ selectedMessage }: MessageDetailProps) => {
  return selectedMessage ? (
    <>
      <div className="border-b">
        <div className="flex flex-col max-sm:gap-3 md:flex-row justify-between p-8">
          <div className="flex flex-col">
            <p className="font-bold">{selectedMessage.senderDetails?.name}</p>
            <p className="text-gray-500">
              {selectedMessage.senderDetails?.email}
            </p>
          </div>

          <div className="flex max-sm:justify-between md:flex-col">
            <p>
              {/* {getTime(selectedMessage.timestamp)} (
              {dayjs(selectedMessage.timestamp).fromNow()}) */}
            </p>
            <div className="flex items-center justify-end gap-3">
              <Trash color="red" />
              <EllipsisVertical />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b">
        <div className="p-8 flex flex-col gap-4">
          <h1 className="header-font font-bold text-2xl">
            {selectedMessage.title}
          </h1>
          <p
            className="text-gray-500"
            dangerouslySetInnerHTML={{
              __html: selectedMessage.description,
            }}
          ></p>
        </div>
      </div>
      <div className="p-8">
        <div className="flex flex-col gap-6">
          {/* <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <TextEditor body={body} setBody={setBody} />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={!body}
                        className="bg-gradient-to-r flex justify-center from-[#f5e800] to-[#7eed5e] text-sm rounded-[35px] items-center gap-3 px-6 py-4"
                      >
                        {mutateLoading ? (
                          <span className="spinner"></span>
                        ) : (
                          "Reply"
                        )}
                      </button>
                    </div>
                  </form> */}
        </div>
      </div>
    </>
  ) : (
    <div className="h-full flex justify-center items-center py-10">
      <Lottie width={400} height={400} options={reactLottieConfig(empty)} />
    </div>
  );
};

export default MessageDetails;
