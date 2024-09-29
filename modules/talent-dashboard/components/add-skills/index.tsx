"use client";

import {
  Check,
  Command,
  PlusCircle,
  MinusCircle,
  ChevronsUpDown,
} from "lucide-react";
import { z } from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

// lib
import { cn } from "@/lib/utils";

// shared
import {
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
  Form,
} from "@/modules/shared/components/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/modules/shared/components/popover";
import {
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandInput,
} from "@/modules/shared/components/command";
import { Button } from "@/modules/shared/components/button";

type AddSkillsProps = {
  skills?: { skill: string; verified?: boolean; id?: string }[];
};

const availableSkills = [
  { label: "French", value: "fr" },
  { label: "Korean", value: "ko" },
  { label: "German", value: "de" },
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "Russian", value: "ru" },
  { label: "Chinese", value: "zh" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
];

const skillSchema = z.object({
  skill: z.string(),
  verified: z.boolean(),
});

const formSchema = z.object({
  skills: z.array(skillSchema),
});

const AddSkills = ({ skills }: AddSkillsProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { skills },
  });
  const { fields, append, remove } = useFieldArray({
    name: "skills",
    control: form.control,
  });

  return (
    <Form {...form}>
      <div className="flex flex-row flex-wrap items-center gap-4">
        {fields.map((field, index) => (
          <div className="flex lg:w-[14em] items-center" key={index}>
            <div className="w-full">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between rounded-[15px]",
                            !field.skill && "text-muted-foreground"
                          )}
                        >
                          {field.skill
                            ? availableSkills.find(
                                (skill) => skill.value === field.skill
                              )?.label
                            : "Select skill"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search skill..." />
                        <CommandList>
                          <CommandEmpty>No Skill found.</CommandEmpty>
                          <CommandGroup>
                            {availableSkills.map((skill) => (
                              <CommandItem
                                value={skill.label}
                                key={skill.value}
                                //   onSelect={() => {
                                //     form.setValue("skills", skill.value);
                                //   }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    skill.value === field.skill
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {skill.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
                <div>
                  <button
                    type="button"
                    className="bg-[#f5f5f5] text-black rounded-md"
                    onClick={() => remove(index)}
                  >
                    <MinusCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="flex items-center gap-2 "
          onClick={() => append({ skill: "", verified: false })}
        >
          <PlusCircle className="h-4 w-4" />
          <p className="font-bold underline">Add another skill</p>
        </button>
      </div>
    </Form>
  );
};

export default AddSkills;
