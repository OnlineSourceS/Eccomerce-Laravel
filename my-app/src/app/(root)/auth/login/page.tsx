'use client'
import AuthLayout from "@/components/layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { FormFieldError } from "../register/page";
import instance from "@/services";
import axios from "axios";
interface LoginFormData {

  email: string;
  password: string;

}
function LoginPage() {
  const [Busy, setBusy] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async ({ email, password }: LoginFormData) => {
    setBusy(true)
    const { data } = await instance.post('/api/user/login', { email, password })
    // axios.post('h', })
    // const res = await axios.post('http://localhost:8000/api/user/login/', { email: data.email, password: data.password })

    setBusy(false)
    console.log({ data })

  };

  return (
    <AuthLayout>
      <div className="mx-auto max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email and password to sign in
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="email"

                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: /^\S+@\S+\.\S+$/,

                  message: 'Please enter a valid email address',
                })}
                className={`${errors.email?.message && "ring-2 ring-red-500"}`}
              />
              {errors.email?.message && <FormFieldError message={errors.email.message} />}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="password"

                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { message: 'Password must be at least 8 characters long', value: 8 },

                })}
                className={`${errors.password?.message && "ring-2 ring-red-500"}`}
              />
              {errors.password?.message && <FormFieldError message={errors.password.message} />}
            </div>
            <Button disabled={Busy} className="w-full" type="submit">
              Login
            </Button>
            <div className="mt-4 text-center text-sm">
              Forgot password?
              {/* Add link or functionality for password reset */}
            </div>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          New user?
          <Link className="underline" href="/auth/register">
            Register
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;
