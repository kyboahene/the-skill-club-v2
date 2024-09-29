"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { PlusCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

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
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
} from "@/modules/shared/components/dialog";
import { Input } from "@/modules/shared/components/input";

type PersonalProjectsProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const formSchema = z.object({
  title: z.string(),
  link: z.string().min(3),
  degree: z.string(),
  startYear: z.string(),
  endYear: z.string(),
  toDate: z.boolean(),
  startMonth: z.string(),
  endMonth: z.string(),
  description: z.string(),
});

export function PersonalProjects({ isOpen, setIsOpen }: PersonalProjectsProps) {
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
        <p className="font-bold underline">Add personal project</p>
      </button>
      <DialogContent className="w-full max-w-md transform rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Add Personal Project</DialogTitle>
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
                          placeholder="Project Title"
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
                  name="link"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Project Link"
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
                        <textarea
                          {...field}
                          rows={4}
                          placeholder="Description about the project"
                          className="bg-ash border border-input px-4 py-4 w-full rounded-[15px]"
                        ></textarea>
                      </FormControl>
                      <FormMessage className="text-red-500" />
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
