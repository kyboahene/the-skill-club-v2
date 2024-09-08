"use client";

import { z } from "zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

// action
import { signInWithPassword } from "../../actions";

import SignInWithProvider from "../sign-in-with-provider";

// lib
import { signInWithPasswordInputSchema } from "@/lib/validations/auth";

// shared
import {
  Form,
  FormItem,
  FormField,
  FormMessage,
  FormControl,
} from "@/modules/shared/components/form";
import { Input } from "@/modules/shared/components/input";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(true);

  const form = useForm<z.infer<typeof signInWithPasswordInputSchema>>({
    resolver: zodResolver(signInWithPasswordInputSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function submit(values: z.infer<typeof signInWithPasswordInputSchema>) {
    const data = {
      email: values.email,
      password: values.password,
    };

    const [_, error] = await signInWithPassword(data);
    console.log({ data });
    if (error) {
      form.setError("email", { message: error.message });
      form.setError("password", { message: error.message });
    }
  }

  return (
    <Form {...form}>
      <div className="login-form lg:w-96">
        <SignInWithProvider text="Sign In with Google" />
        <div className="flex relative items-center justify-center my-8 before:w-full before:h-[1px] before:block before:absolute before:bg-gray-400 before:content-['']">
          <h1 className="text-center z-10 bg-white px-3">Or</h1>
        </div>
        <form onSubmit={form.handleSubmit(submit)}>
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
                      placeholder="email@example.com"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <div className="relative">
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type={showPassword ? "password" : "text"}
                        placeholder="password12345"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/3 h-6 w-6"
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
          </div>
          <div className="flex justify-end my-5">
            <Link href="/auth/forgot-password">
              <p className="hover:underline cursor-pointer text-sm">
                Forgot Password?
              </p>
            </Link>
          </div>
          <div className="">
            <button
              type="submit"
              disabled={form.formState.isLoading}
              className="rounded-[35px] bg-gradient-to-r from-yellow to-green px-3 py-4 text-center w-full text-[14px] hover:cursor-pointer"
            >
              {form.formState.isLoading ? (
                <span className="spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default LoginForm;
