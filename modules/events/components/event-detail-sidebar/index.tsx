"use client";

import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "next-share";
import { Copy } from "lucide-react";
import { Event } from "@prisma/client";
import React, { useState } from "react";
import Whatsapp from "@/assets/icons/social/whatsapp";
import Twitter from "@/assets/icons/social/twitter";
import LinkedIn from "@/assets/icons/social/linkedIn";
import Facebook from "@/assets/icons/social/facebook";

const EventDetailSidebar = ({ event }: { event: Event | null }) => {
  const [copied, setCopied] = useState(false);

  const eventTitle = event ? event.title?.split(" ").join("-") : "";

  function handleCopy() {
    navigator.clipboard.writeText(
      `https://www.theskill.club/events/${event?.title}`
    );
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div className="flex-1 flex flex-col gap-6">
      <a href={event?.link} className="" target="_blank" rel="noreferrer">
        <div className=" mt-3 group lg:cursor-pointer flex justify-center px-3 py-4 text-[16px] rounded-[5px] bg-black text-white">
          <div className="flex items-center gap-2">
            <span className="translate-x-4 group-hover:-translate-x-0 transition-transform duration-150">
              Register for this event
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 translate-x-8 opacity-0 transition-transform duration-150 group-hover:-translate-x-0 group-hover:opacity-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </a>
      <div className="flex items-center gap-3 text-md border-t py-4">
        <div className="bg-black p-1 rounded-full text-white">
          <div className="m-[0.3rem] group relative cursor-pointer">
            <div onClick={() => handleCopy()}>
              <Copy className="w-5 h-5" />
            </div>
            <span className="p-2 w-20 rounded-md text-[0.8em] bg-black text-white absolute -top-11 -left-5 before:bg-black before:p-1 before:absolute before:right-1/2 before:-bottom-1 before:rotate-45 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-[0.2s]">
              {copied ? "Copied" : "Copy link"}
            </span>
          </div>
        </div>
        <FacebookShareButton
          quote={event?.description}
          hashtag={"#nextshare"}
          url={`https://www.theskill.club/events/${eventTitle}`}
        >
          <Facebook />
        </FacebookShareButton>
        <LinkedinShareButton
          url={`https://www.theskill.club/events/${eventTitle}`}
        >
          <LinkedIn />
        </LinkedinShareButton>
        <TwitterShareButton
          url={`https://www.theskill.club/events/${eventTitle}`}
        >
          <Twitter />
        </TwitterShareButton>
        <WhatsappShareButton
          url={`https://www.theskill.club/events/${eventTitle}`}
        >
          <Whatsapp />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default EventDetailSidebar;
