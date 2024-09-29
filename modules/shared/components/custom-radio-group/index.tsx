"use client";

import React from "react";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import { Label } from "../label";
import { Capitalize } from "@/lib/utils/capitalize";

type CustomRadioGroupProps = {
  defaultValue?: string;
  items: string[];
  onValueChange?: (value: string) => void;
};

const CustomRadioGroup = ({
  items,
  defaultValue,
  onValueChange,
}: CustomRadioGroupProps) => {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className="flex items-center gap-0"
    >
      {items.map((item, index) => (
        <div key={index} className="relative w-full">
          <RadioGroupItem
            value={item}
            id={`item-${index + item}`}
            className="peer absolute inset-0 opacity-0"
          />
          <Label
            htmlFor={`item-${index + item}`}
            className="flex justify-center cursor-pointer rounded-[15px] px-6 py-5 border transition-colors duration-200 ease-in-out
                       peer-focus:bg-gradient-to-r peer-focus:from-yellow peer-focus:to-green"
          >
            <p>{Capitalize(item)}</p>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
