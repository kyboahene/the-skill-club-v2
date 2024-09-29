"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { PlusCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { months } from "@/constants";

// shared
import { Button } from "@/modules/shared/components/button";

// shared
import {
  Form,
  FormItem,
  FormField,
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
import { getYearsBackDated } from "@/lib/utils/get-years-back";

type CertificateModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const formSchema = z.object({
  title: z.string(),
  issuer: z.string().min(3),
  year: z.string(),
  month: z.string(),
});

export function CertificateModal({ isOpen, setIsOpen }: CertificateModalProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {}

  return (
    <Dialog open={isOpen}>
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <PlusCircle className="h-4 w-4" />
        <p className="font-bold underline">Add Certificate</p>
      </button>
      <DialogContent className="w-full max-w-md transform rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add Certificate</DialogTitle>
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
                          placeholder="Title"
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
                  name="issuer"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Institution"
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
                    name="month"
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
                    name="year"
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
