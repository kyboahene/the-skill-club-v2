import React from "react";

const ChevronRight = ({
  number,
  color,
}: {
  color?: string;
  number?: number;
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-${number} h-${number} text-${color ?? "black"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </>
  );
};

export default ChevronRight;
