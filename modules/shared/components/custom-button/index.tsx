import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  link: string;
  text: string;
  animate?: boolean;
  className?: string;
}

const Button = ({ link, text, className }: Props) => {
  return (
    <div className="flex justify-center lg:block">
      <Link href={`/${link}`}>
        <button
          className={cn(
            "group cursor-pointer flex items-center gap-1 bg-gradient-to-r from-yellow to-green text-black py-[14px] px-[22px] text-[16px] rounded-[35px]",
            className
          )}
        >
          <span className="translate-x-4 group-hover:-translate-x-0 transition-transform duration-150">
            {text}
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
        </button>
      </Link>
    </div>
  );
};

export default Button;
