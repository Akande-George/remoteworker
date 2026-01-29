"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";

// UI Components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Context
import { useAuthContext } from "@/context/AuthContext";

// 1. Define the Error Interface matching Axios structure
interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

const Page = () => {
  const { login } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      await login(email, password);
    },
    // 2. Use 'unknown' (safer than any) and cast to our interface
    onError: (error: unknown) => {
      const err = error as ApiError;

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Login failed. Please try again.",
      );
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    mutation.mutate({ email, password });
  };

  return (
    <div>
      <form className="space-y-7" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <Label htmlFor="email" className="text-[#161A21] text-[14px]">
            Email Address*
          </Label>
          <Input
            id="email"
            placeholder="hello@alignui.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password" className="text-[#161A21] text-[14px]">
            Password*
          </Label>
          <div className="relative">
            <Input
              id="password"
              placeholder="Password (8 or more characters)"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
              tabIndex={-1}
            >
              <Image
                src={showPassword ? "/eye-line.svg" : "/eye-off-line.svg"}
                width={20}
                height={20}
                alt="Toggle password visibility"
              />
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="text-red-500 text-sm font-medium">{error}</div>
        )}

        <div className="text-[#6A6D71] text-[14px]">
          Forgot password?{" "}
          <Link
            href="/forgot-password"
            className="text-[#161A21] underline cursor-pointer"
          >
            Reset it
          </Link>
        </div>

        <div>
          <Button
            className="w-full"
            type="submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Logging in..." : "Login to your account"}
          </Button>
        </div>

        <div className="text-center text-[14px] text-[#6A6D71]">
          Doesn’t have an account?{" "}
          <Link href={`/subscribe`} className="text-[#E9358F] underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Page;
