'use client'
import AuthLayout from "@/components/layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/providers";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message'; // Optional for error messages
import axios from "axios";
import instance from "@/services";

// Assuming Label, Input, Button, and Link components are defined with appropriate types

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<RegisterFormData>();
  const [Busy, setBusy] = useState(false)

  const onSubmit = async ({ email, password, firstName, lastName, }: RegisterFormData) => {

    setBusy(true)
    try {

      const { data } = await instance.post('/api/user/register', { name: `${firstName} ${lastName}`, role: 'user', password, email, profile: "profileurl" })
      console.log(data)
      
      
    } catch (error) {

    }
    setBusy(false)


  };

  return (
    <AuthLayout>
      <div className="mx-auto max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to create an account
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="Lee"
                  {...register('firstName', { required: 'First name is required' })}
                  className={`${errors.firstName?.message && "ring-2 ring-red-500"}`}

                />
                {/* Optional error message using @hookform/error-message */}
                {errors.firstName?.message && <FormFieldError message={errors.firstName.message} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Robinson"
                  {...register('lastName', { required: 'Last name is required' })}
                  className={`${errors.lastName?.message && "ring-2 ring-red-500"}`}

                />
                {errors.lastName?.message && <FormFieldError message={errors.lastName.message} />}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
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

                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: 8,
                  message: 'Password must be at least 8 characters long',
                })}
                className={`${errors.password?.message && "ring-2 ring-red-500"}`}

              />
              {errors.password?.message && <FormFieldError message={errors.password.message} />}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                {...register('confirmPassword', {
                  required: 'Confirm password is required',
                  validate: (value) =>
                    value === getValues('password') || 'Passwords do not match',
                  message: 'Passwords do not match',
                })}
                className={`${errors.confirmPassword?.message && "ring-2 ring-red-500"}`}
              />
              {errors.confirmPassword?.message && <FormFieldError message={errors.confirmPassword.message} />}
            </div>
            <Button disabled={Busy} className="w-full" type="submit">
              Register
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?
          <Link className="underline" href="/auth/login">
            Register
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}

export default RegisterPage;

export function FormFieldError({ message }: { message: string }) {
  return <p className="text-xs text-red-500 ">{message}</p>

}