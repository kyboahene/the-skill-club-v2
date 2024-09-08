"use client";

import { z } from "zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

// action
import { resetPassword } from "../../actions";

// shared
import {
  Form,
  FormItem,
  FormField,
  FormMessage,
  FormControl,
} from "@/modules/shared/components/form";
import { Input } from "@/modules/shared/components/input";

// lib
import { showSuccessMessage } from "@/lib/utils";
import { resetPasswordInputSchema } from "@/lib/validations/auth";

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const form = useForm<z.infer<typeof resetPasswordInputSchema>>({
    resolver: zodResolver(resetPasswordInputSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function submit(values: z.infer<typeof resetPasswordInputSchema>) {
    const data = {
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    const [_, error] = await resetPassword(data);

    if (error) {
      form.setError("password", { message: error.message });
      form.setError("confirmPassword", { message: error.message });
      return;
    }

    showSuccessMessage(
      "",
      "Reset link has been sent to your email successfully."
    );
  }

  return (
    <Form {...form}>
      <form className="login-form lg:w-96" onSubmit={form.handleSubmit(submit)}>
        <div className="mt-5 flex flex-col gap-2">
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input
                      {...field}
                      type={showPassword ? "password" : "text"}
                      placeholder="password12345"
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/3 h-6 w-6"
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </button>
                </div>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5 flex flex-col gap-2">
          <FormField
            name="confirmPassword"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl className="relative">
                    <Input
                      {...field}
                      type={showConfirmPassword ? "password" : "text"}
                      placeholder="password12345"
                    />
                  </FormControl>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-5 top-1/3 h-6 w-6"
                  >
                    {showConfirmPassword ? <Eye /> : <EyeOff />}
                  </button>
                </div>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-[2.5em]">
          <button
            type="submit"
            disabled={form.formState.isLoading}
            className="rounded-[35px] bg-gradient-to-r from-yellow to-green px-3 py-4 text-center w-full text-[14px] hover:cursor-pointer"
          >
            {form.formState.isLoading ? (
              <span className="spinner"></span>
            ) : (
              "Reset Password"
            )}
          </button>
        </div>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
