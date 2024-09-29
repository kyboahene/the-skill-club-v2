import * as z from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { ChevronsUpDown, Check, MinusCircle, Plus } from "lucide-react";

// constants
import { degrees, jobCategories, jobTypes, modes, roles } from "@/constants";

// lib
import { cn } from "@/lib/utils";
import { jobFiltersSchema } from "@/lib/validations/job";

// modules
import {
  Form,
  FormItem,
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
} from "@/modules/shared/components/form";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/modules/shared/components/popover";
import {
  Command,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandInput,
} from "@/modules/shared/components/command";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/modules/shared/components/accordion";
import { Button } from "@/modules/shared/components/button";
import { Checkbox } from "@/modules/shared/components/checkbox";

type FormValues = z.infer<typeof jobFiltersSchema>;

const JobFilters = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(jobFiltersSchema),
    defaultValues: {
      mode: [],
      roles: [],
      skills: [],
      jobTypes: [],
      location: "",
      education: [],
      jobCategory: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "roles",
    control: form.control,
  });

  const {
    fields: skillFields,
    append: skillAppend,
    remove: skillRemove,
  } = useFieldArray({
    name: "skills",
    control: form.control,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Roles</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-row flex-wrap items-center gap-4">
                {fields.map((field, index) => (
                  <div className="flex" key={field.id}>
                    <div className="w-full">
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <FormField
                          control={form.control}
                          name="jobTypes"
                          render={() => (
                            <FormItem className="flex flex-col">
                              <Controller
                                name={`roles.${index}.id`}
                                control={form.control}
                                render={({ field }) => (
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant="outline"
                                          role="combobox"
                                          className={cn(
                                            "w-full justify-between rounded-[15px]",
                                            !field.value &&
                                              "text-muted-foreground"
                                          )}
                                        >
                                          {field.value
                                            ? roles.find(
                                                (role) => role === field.value
                                              )
                                            : "Select role"}
                                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0 bg-white">
                                      <Command>
                                        <CommandInput placeholder="Search role..." />
                                        <CommandList>
                                          <CommandEmpty>
                                            No role found.
                                          </CommandEmpty>
                                          <CommandGroup>
                                            {roles.map((role) => (
                                              <CommandItem
                                                key={role}
                                                value={role}
                                                onSelect={() => {
                                                  field.onChange(role);
                                                }}
                                                className="cursor-pointer"
                                              >
                                                <Check
                                                  className={cn(
                                                    "mr-2 h-4 w-4",
                                                    role === field.value
                                                      ? "opacity-100"
                                                      : "opacity-0"
                                                  )}
                                                />
                                                {role}
                                              </CommandItem>
                                            ))}
                                          </CommandGroup>
                                        </CommandList>
                                      </Command>
                                    </PopoverContent>
                                  </Popover>
                                )}
                              />
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        <MinusCircle
                          className="h-4 w-4 cursor-pointer"
                          onClick={() => remove(index)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="rounded bg-black border-none p-2 text-white"
                  onClick={() => append({ id: "" })}
                  aria-label="Add role"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Job Type</AccordionTrigger>
            <AccordionContent>
              <FormField
                control={form.control}
                name="jobTypes"
                render={() => (
                  <FormItem>
                    {jobTypes.map((item) => (
                      <FormField
                        key={`item.${item}.id`}
                        control={form.control}
                        name="jobTypes"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Mode</AccordionTrigger>
            <AccordionContent>
              <FormField
                control={form.control}
                name="mode"
                render={() => (
                  <FormItem>
                    {modes.map((item) => (
                      <FormField
                        key={`item.${item}.id`}
                        control={form.control}
                        name="mode"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Skills</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-row flex-wrap items-center gap-4">
                {skillFields.map((field, index) => (
                  <div className="flex" key={field.id}>
                    <div className="w-full">
                      <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <FormField
                          control={form.control}
                          name="jobTypes"
                          render={() => (
                            <FormItem className="flex flex-col">
                              <Controller
                                name={`roles.${index}.id`}
                                control={form.control}
                                render={({ field }) => (
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant="outline"
                                          role="combobox"
                                          className={cn(
                                            "w-full justify-between rounded-[15px]",
                                            !field.value &&
                                              "text-muted-foreground"
                                          )}
                                        >
                                          {field.value
                                            ? roles.find(
                                                (role) => role === field.value
                                              )
                                            : "Select role"}
                                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0 bg-white">
                                      <Command>
                                        <CommandInput placeholder="Search role..." />
                                        <CommandList>
                                          <CommandEmpty>
                                            No role found.
                                          </CommandEmpty>
                                          <CommandGroup>
                                            {roles.map((role) => (
                                              <CommandItem
                                                key={role}
                                                value={role}
                                                onSelect={() => {
                                                  field.onChange(role);
                                                }}
                                                className="cursor-pointer"
                                              >
                                                <Check
                                                  className={cn(
                                                    "mr-2 h-4 w-4",
                                                    role === field.value
                                                      ? "opacity-100"
                                                      : "opacity-0"
                                                  )}
                                                />
                                                {role}
                                              </CommandItem>
                                            ))}
                                          </CommandGroup>
                                        </CommandList>
                                      </Command>
                                    </PopoverContent>
                                  </Popover>
                                )}
                              />
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        <MinusCircle
                          className="h-4 w-4 cursor-pointer"
                          onClick={() => skillRemove(index)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="rounded bg-black border-none p-2 text-white"
                  onClick={() => skillAppend({ id: "" })}
                  aria-label="Add role"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Education</AccordionTrigger>
            <AccordionContent>
              <FormField
                control={form.control}
                name="education"
                render={() => (
                  <FormItem>
                    {degrees.map((item) => (
                      <FormField
                        key={`item.${item}.id`}
                        control={form.control}
                        name="education"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Job Category</AccordionTrigger>
            <AccordionContent>
              <FormField
                control={form.control}
                name="jobCategory"
                render={() => (
                  <FormItem>
                    {jobCategories.map((item) => (
                      <FormField
                        key={`item.${item}.id`}
                        control={form.control}
                        name="jobCategory"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex gap-1 justify-end py-6">
          <Button
            type="button"
            onClick={() => form.reset()}
            className="flex justify-center text-sm font-bold rounded-[35px] border-bl items-center gap-3 px-6 py-4"
          >
            Reset
          </Button>
          <Button
            type="submit"
            className="bg-gradient-to-r flex justify-center from-yellow to-green text-sm rounded-[35px] items-center gap-3 px-6 py-4"
          >
            Apply
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default JobFilters;
