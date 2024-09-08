"use client";

import { z } from "zod";
import React from "react";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// shared
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/modules/shared/components/form";
import { Input } from "@/modules/shared/components/input";

// actions
import { forgotPassword } from "../../actions";

// lib
import { showSuccessMessage } from "@/lib/utils";
import { forgotPasswordInputSchema } from "@/lib/validations/auth";

const ForgetPasswordForm = () => {
  const { pending } = useFormStatus();

  const form = useForm<z.infer<typeof forgotPasswordInputSchema>>({
    resolver: zodResolver(forgotPasswordInputSchema),
    defaultValues: {
      email: "",
    },
  });

  async function submit(values: z.infer<typeof forgotPasswordInputSchema>) {
    const [_, error] = await forgotPassword({ email: values.email });

    if (error) {
      form.setError("email", { message: error.message });
      return;
    }

    showSuccessMessage(
      "",
      "Reset link has been sent to your email successfully."
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <div className="my-5">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="email@example.com"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="rounded-[35px] bg-gradient-to-r from-yellow to-green px-3 py-4 text-center w-full text-[14px] hover:cursor-pointer"
          >
            {form.formState.isLoading ? (
              <span className="spinner"></span>
            ) : (
              "Send Password Reset Link"
            )}
          </button>
        </div>
        <div className="flex justify-center my-5">
          <p>
            Back to
            <Link
              href="/auth/login"
              className="mx-1 hover:underline hover:font-bold"
            >
              {pending ? <span className="spinner"></span> : "Login"}
            </Link>
            page
          </p>
        </div>
      </form>
    </Form>
  );
};

export default ForgetPasswordForm;
