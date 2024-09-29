"use client";

import { z } from "zod";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { gender, modes, professions, roles } from "@/constants";

import CustomRadioGroup from "@/modules/shared/components/custom-radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/shared/components/form";
import { Input } from "@/modules/shared/components/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/modules/shared/components/select";
import { SelectItem } from "@radix-ui/react-select";
import { Button } from "@/modules/shared/components/button";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  role: z.string(),
  linkedIn: z.string().url(),
  gitPortWebsite: z.string().url(),
  profession: z.boolean(),
  website: z.string().url(),
  phone: z.string(),
  countryCode: z.string(),
  description: z.string(),
  gender: z.string(),
  profile: z.string(),
  availability: z.boolean(),
  country: z.string(),
});

const ProfileEdit = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form
        className="profile-form py-6 text-sm flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="bg-white p-6 rounded-[15px] flex flex-col gap-6">
          <div className="flex justify-between">
            <h1 className="text-xl header-font font-bold">Profile</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full h-16 w-16 text-white cursor-pointer relative border">
                <div className="relative h-16 w-16 rounded-full overflow-hidden">
                  <Image
                    src={"/images/placeholder.jpg"}
                    alt="profile"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <label>
                <div className="rounded-full p-3 px-4 bg-gradient-to-r from-yellow to-green cursor-pointer relative">
                  Upload new photo
                </div>
                <input type="file" hidden />
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
                        className=" border-input"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Email"
                          className=" border-input"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label className="font-bold">Gender</label>
                <CustomRadioGroup items={gender} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
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
                            <SelectValue placeholder="Country" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              {/* {months.map((month, index) => (
                                  <SelectItem value={month} key={index}>
                                    {month}
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
              <div className="flex-1">
                <label className="font-bold">Phone</label>
                <div className="flex flex-1 items-center">
                  <div className="w-[40%]">
                    <input
                      placeholder="Phone"
                      disabled
                      className="w-full mt-[0.2em] px-6 py-4 rounded-[15px] border"
                      // onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <input
                    type="number"
                    //   value={phone}
                    placeholder="Phone"
                    className="w-full mt-[0.2em] px-6 py-4 rounded-[15px] border"
                    //   onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Description</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        rows={8}
                        placeholder="Tell us about yourself"
                        className=" border border-input px-4 py-4 w-full rounded-[15px]"
                      ></textarea>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[15px] flex flex-col gap-6">
          <h1 className="text-xl header-font">Job Specifications</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <label className="font-bold">Profession</label>
              <CustomRadioGroup items={professions} />
            </div>
            <div className="flex-1">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Role</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="flex-1 px-6 py-6 ">
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            {roles.map((month, index) => (
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
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <label className="font-bold">Mode</label>
              <CustomRadioGroup items={modes} />
            </div>
            <div className="flex-1">
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
                        className=" border-input"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <FormField
                name="linkedIn"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">LinkedIn</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="LinkedIn profile"
                        className=" border-input"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1">
              <FormField
                name="gitPortWebsite"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Github</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Github profile"
                        className=" border-input"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            type="submit"
            //   disabled={loading}
            className="bg-gradient-to-r from-yellow to-green flex justify-center text-sm rounded-[35px] items-center gap-3 px-6 py-4"
          >
            <div>
              {/* {loading ? (
              <span className="spinner"></span>
            ) : ( */}
              <span>Save Changes</span>
              {/* )} */}
            </div>
          </Button>
          <button className="font-bold">Cancel</button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileEdit;
