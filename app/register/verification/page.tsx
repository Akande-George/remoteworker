import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center border-b border-[#E8E8E8] pb-6">
        <Image src={`/logo.svg`} width={101} height={32.15} alt="logo" />
      </div>
      <section className="w-[500px] mx-auto pt-24">
        <div className="flex justify-center items-center">
          <Image
            src={`/message-icon2.svg`}
            width={96}
            height={96}
            alt="circl"
            className=""
          />
        </div>
        <div className="text-center  text-[#161A21] text-[32px] sora-semibold">
          Enter Verification Code
        </div>
        <div className="text-center text-[#6A6D71] text-[16px]">
          We’ve sent your verification codes to your email address
        </div>
        <div className="text-center text-[#161A21] text-[16px]">
          adeoyeadeife@gmail.com
        </div>
        <div className="border-t border-[#E8E8E8] mt-6 pt-6 flex justify-center items-center">
          <InputOTP maxLength={6} defaultValue="000000">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="flex justify-center items-center pt-8">
          <Button className="w-full">Verify</Button>
        </div>
        <div className="text-center text-[#6A6D71] text-[14px] mt-6">
          Experiencing issues receiving the code?
        </div>
        <div className="text-center text-[#161A21] underline text-[14px] cursor-pointer">
          Resend code
        </div>
      </section>
    </div>
  );
};

export default page;
