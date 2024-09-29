"use client";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PlusCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { months } from "@/constants";

// shared
import { Checkbox } from "@/modules/shared/components/checkbox";
import { Button } from "@/modules/shared/components/button";

// lib
import { getYearsBackDated } from "@/lib/utils/get-years-back";

// shared
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/modules/shared/components/form";
import {
  Select,
  SelectItem,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/modules/shared/components/select";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
} from "@/modules/shared/components/dialog";
import { Input } from "@/modules/shared/components/input";

type WorkHistoryModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const formSchema = z.object({
  title: z.string(),
  company: z.string().min(3),
  companyLink: z.string(),
  startYear: z.string(),
  endYear: z.string(),
  toDate: z.boolean(),
  startMonth: z.string(),
  endMonth: z.string(),
  description: z.string(),
});

export function WorkHistoryModal({ isOpen, setIsOpen }: WorkHistoryModalProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const isProjectOngoing = form.watch("toDate");

  function onSubmit(data: z.infer<typeof formSchema>) {}

  return (
    <Dialog open={isOpen}>
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <PlusCircle className="h-4 w-4" />
        <p className="font-bold underline">Add work history</p>
      </button>
      <DialogContent className="w-full max-w-md transform rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add Work History</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-8">
              <div className="flex flex-col gap-2">
                <FormField
                  name="title"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Job Title"
                          className="bg-ash border-input"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  name="company"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Company"
                          className="bg-ash border-input"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="">
                <FormField
                  name="companyLink"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Company website"
                          className="bg-ash border-input"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="">
                <FormField
                  name="description"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Job description"
                          className="bg-ash border-input"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1 relative overflow-hidden">
                  <FormField
                    control={form.control}
                    name="startMonth"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="flex-1 px-6 py-6 bg-ash">
                              <SelectValue placeholder="From" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectGroup>
                                {months.map((month, index) => (
                                  <SelectItem value={month} key={index}>
                                    {month}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="startYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="px-6 py-6 bg-ash">
                              <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectGroup>
                                {getYearsBackDated(20).map((year, index) => (
                                  <SelectItem value={`${year}`} key={index}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              {!isProjectOngoing ? (
                <div className="flex gap-3">
                  <div className="flex-1 relative overflow-hidden">
                    <FormField
                      control={form.control}
                      name="endMonth"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="flex-1 px-6 py-6 bg-ash">
                                <SelectValue placeholder="To" />
                              </SelectTrigger>
                              <SelectContent className="bg-white">
                                <SelectGroup>
                                  {months.map((month, index) => (
                                    <SelectItem value={month} key={index}>
                                      {month}
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="endYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="px-6 py-6 bg-ash">
                                <SelectValue placeholder="Year" />
                              </SelectTrigger>
                              <SelectContent className="bg-white">
                                <SelectGroup>
                                  {getYearsBackDated(20).map((year, index) => (
                                    <SelectItem value={`${year}`} key={index}>
                                      {year}
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div>
                <FormField
                  control={form.control}
                  name="toDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Ongoing</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <div className="flex gap-2">
                <Button
                  type="reset"
                  className="inline-flex justify-center rounded-[35px] border-2 px-4 py-2 text-sm font-medium border-black"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="justify-center rounded-[35px] bg-gradient-to-r from-[#f5e800] to-[#7eed5e] px-6 text-sm font-medium">
                  {form.formState.isLoading ? (
                    <span className="spinner"></span>
                  ) : (
                    "Save"
                  )}
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
