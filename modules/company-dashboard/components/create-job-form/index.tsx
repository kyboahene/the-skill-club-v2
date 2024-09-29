"use client";

import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// constant
import {
  years,
  degrees,
  remotes,
  jobTypes,
  salaries,
  jobCategories,
} from "@/constants";

// lib
import { createJobSchema } from "@/lib/validations/company";

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
import { Input } from "@/modules/shared/components/input";
import { Button } from "@/modules/shared/components/button";
import { Textarea } from "@/modules/shared/components/textarea";
import AddSkills from "@/modules/talent-dashboard/components/add-skills";

const CreateJobForm = () => {
  const form = useForm<z.infer<typeof createJobSchema>>({
    resolver: zodResolver(createJobSchema),
  });

  function onSubmit(values: z.infer<typeof createJobSchema>) {}

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-10 bg-white rounded-[15px] py-8 px-6 md:px-12">
          <h2 className="header-font font-bold text-xl">Job Details</h2>
          <div className="flex flex-col gap-2">
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Job Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Job Title"
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
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Job Summary</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={10}
                      className="resize-none rounded-[15px]"
                      placeholder="Job Summary"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-4">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Job Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="flex-1 px-6 py-6 ">
                          <SelectValue placeholder="Job Type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            {jobTypes.map((type, index) => (
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
            <div className="flex-1">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Job Category</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="flex-1 px-6 py-6 ">
                          <SelectValue placeholder="Job Category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            {jobCategories.map((jobCategory, index) => (
                              <SelectItem value={jobCategory} key={index}>
                                {jobCategory}
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
            <div className="flex-1">
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Salary</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="flex-1 px-6 py-6 ">
                          <SelectValue placeholder="Salary" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            {salaries.map((salary, index) => (
                              <SelectItem value={salary} key={index}>
                                {salary}
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
            <div className="flex-1 flex items-center gap-4">
              <div className="flex items-center gap-4">
                <FormField
                  name="minPay"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Min</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Minimum pay"
                          className="rounded-[15px] border-input"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <span className="flex-1 flex justify-center">-</span>
              <div className="flex items-center gap-4">
                <FormField
                  name="maxPay"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Max</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Maximum pay"
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
          <div className="flex flex-col gap-2">
            <label className="font-bold">Responsibilities</label>
            {/* <TextEditor
                setBody={setResponsibilities}
                body={responsibilities}
                placeholder="Responsibilities in bullets"
              /> */}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Requirement</label>
            {/* <TextEditor
                setBody={setRequirements}
                body={requirements}
                placeholder="Requirement in bullets"
              /> */}
          </div>
        </div>
        <div className="bg-white rounded-[15px] py-8 px-6 md:px-12 flex flex-col gap-6">
          <h2 className="header-font font-bold text-xl">Skills & Experience</h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-bold">Skills</label>
              <div className="p-3 border rounded-[15px]">
                <AddSkills />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-4">
              <div className="flex flex-1 flex-col gap-2">
                <FormField
                  control={form.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Education</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="flex-1 px-6 py-6 ">
                            <SelectValue placeholder="Education" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              {degrees.map((degree, index) => (
                                <SelectItem value={degree} key={index}>
                                  {degree}
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
                  name="workLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Location</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="flex-1 px-6 py-6 ">
                            <SelectValue placeholder="Location" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectGroup>
                              {remotes.map((remote, index) => (
                                <SelectItem value={remote} key={index}>
                                  {remote}
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
            <div>
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Experience</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="flex-1 px-6 py-6 ">
                          <SelectValue placeholder="Years of experience" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            {years.map((year, index) => (
                              <SelectItem value={year} key={index}>
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
        </div>
        <div className="flex gap-3">
          <Button
            type="submit"
            className="bg-gradient-to-r flex justify-center from-yellow to-green text-sm rounded-[35px] items-center gap-3 px-6 py-4"
          >
            <span>Save Job</span>
          </Button>
          <Button className="font-bold">Cancel</Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateJobForm;
