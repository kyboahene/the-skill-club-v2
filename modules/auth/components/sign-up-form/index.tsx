"use client";

import { z } from "zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

// action
import { signUp } from "../../actions";

// lib
import { showSuccessMessage } from "@/lib/utils";
import { signUpInputSchema } from "@/lib/validations/auth";
// import useAlertMessage from "@/lib/hooks/use-alert-message";

// shared
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/modules/shared/components/form";
import { Input } from "@/modules/shared/components/input";

// components
import SignInWithProvider from "../sign-in-with-provider";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const form = useForm<z.infer<typeof signUpInputSchema>>({
    resolver: zodResolver(signUpInputSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function submit(values: z.infer<typeof signUpInputSchema>) {
    const data = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    const [_, error] = await signUp(data);
    if (error) {
      form.setError("email", { message: error.message });
      form.setError("password", { message: error.message });
      form.setError("confirmPassword", { message: error.message });

      return;
    }

    showSuccessMessage(
      "",
      "Email verification link has been sent to your email! Please check your spam if the email is not in your inbox."
    );
  }

  return (
    <Form {...form}>
      <form
        className="signUp-form text-sm lg:w-96"
        onSubmit={form.handleSubmit(submit)}
      >
        <SignInWithProvider text="Sign up with google" />

        <div className="flex relative items-center my-5 justify-center before:w-full before:h-[1px] before:block before:absolute before:bg-gray-400 before:content-['']">
          <h1 className="text-center mt-5 z-10 bg-white px-3 mb-5">Or</h1>
        </div>
        <div className="flex flex-col gap-2">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="email@expample.com"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6 flex flex-col gap-2">
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
        <div className="my-6 flex flex-col gap-2">
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
            className="rounded-[35px] bg-gradient-to-r from-yellow to-green px-4 text-center w-full py-3 text-[14px] hover:cursor-pointer"
          >
            {form.formState.isLoading ? (
              <span className="spinner"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
