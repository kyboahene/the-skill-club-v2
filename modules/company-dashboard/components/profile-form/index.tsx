"use client";

import { z } from "zod";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

// lib
import { cn } from "@/lib/utils";
import { companyProfileInputSchema } from "@/lib/validations/company";

// constant
import { sizes, types } from "@/constants";

// shared
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/modules/shared/components/form";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
} from "@/modules/shared/components/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/modules/shared/components/popover";
import { Input } from "@/modules/shared/components/input";
import { Button } from "@/modules/shared/components/button";
import { Textarea } from "@/modules/shared/components/textarea";
import { Calendar } from "@/modules/shared/components/calendar";

const CompanyProfileForm = () => {
  const form = useForm<z.infer<typeof companyProfileInputSchema>>({
    resolver: zodResolver(companyProfileInputSchema),
  });

  function onSubmit(value: z.infer<typeof companyProfileInputSchema>) {}

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="rounded-[15px] py-8 px-6 md:px-12 bg-white flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full h-16 w-16 text-white cursor-pointer relative border">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={"/images/placeholder.jpg"}
                  fill
                  alt="profile"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <label>
              <div className="rounded-full p-3 px-4 bg-gradient-to-r from-[#f5e800] to-[#7eed5e] cursor-pointer relative">
                Upload new photo
              </div>
              <Input
                type="file"
                className="hidden"
                //  onChange={handleImageUpload}
              />
            </label>
            <p className="font-bold">Delete</p>
          </div>

          <div className="flex flex-col gap-2">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Your full name"
                      className="rounded-[15px] border-input"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email"
                        className="rounded-[15px] border-input"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <FormField
                name="website"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Website</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Website"
                        className="rounded-[15px] border-input"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <FormField
                control={form.control}
                name="foundedDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Founded Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full py-6 pl-4 text-left font-normal rounded-[15px]",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          className="bg-white"
                          selected={field.value}
                          onSelect={field.onChange}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Company Size</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="flex-1 px-6 py-6 ">
                          <SelectValue placeholder="Company Size" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            {sizes.map((size, index) => (
                              <SelectItem value={size} key={index}>
                                {size}
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
          <div className="flex flex-col md:flex-row gap-8 md:gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <FormField
                control={form.control}
                name="companyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Company Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="flex-1 px-6 py-6 ">
                          <SelectValue placeholder="Company Type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            {types.map((type, index) => (
                              <SelectItem value={type} key={index}>
                                {type}
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
            <div className="flex flex-1 flex-col gap-2">
              <FormField
                control={form.control}
                name="market"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Market</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="flex-1 px-6 py-6 ">
                          <SelectValue placeholder="Market" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            {types.map((type, index) => (
                              <SelectItem value={type} key={index}>
                                {type}
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
          <div className="flex flex-col gap-2">
            <div className="w-full">
              <FormField
                control={form.control}
                name="overview"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">About Company</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={10}
                        className="resize-none rounded-[15px]"
                        placeholder="Tell us a little bit about the company"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[15px] py-8 px-6 md:px-12 flex flex-col gap-6">
          <h2 className="header-font font-bold text-xl">Social Media</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <FormField
                name="linkedIn"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">LinkedIn</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="url"
                        placeholder="LinkedIn"
                        className="rounded-[15px] border-input"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <FormField
                name="twitter"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Twitter</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="url"
                        placeholder="Twitter"
                        className="rounded-[15px] border-input"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[15px] py-8 px-6 md:px-12 flex flex-col gap-6">
          <h2 className="header-font font-bold text-xl">Address & Location</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <FormField
                name="address"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Address"
                        className="rounded-[15px] border-input"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-4">
              <div className="flex flex-1 flex-col gap-2">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Country</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="flex-1 px-6 py-6 ">
                            <SelectValue placeholder="Market" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              {/* {types.map((type, index) => (
                              <SelectItem value={type} key={index}>
                                {type}
                              </SelectItem>
                            ))} */}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label className="font-bold">City</label>
                {/* <Select
                    item={country}
                    text="Location"
                    items={countries}
                    setItem={setCountry}
                    className="border"
                  /> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button
            type="submit"
            className="bg-gradient-to-r text-md flex justify-center from-yellow to-green rounded-[25px] items-center gap-3 px-8 py-3"
          >
            <span>Save</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CompanyProfileForm;
