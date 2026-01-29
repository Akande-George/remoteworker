import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OnboardingFlow from "@/components/Onboarding/OnboardingFlow";

const page = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center border-b border-[#E8E8E8] pb-6">
        <Image src={`/logo.svg`} width={101} height={32.15} alt="logo" />
      </div>
      <section className="w-[500px] mx-auto pt-24">
        <div className="flex justify-center items-center">
          <Image
            src={`/user.svg`}
            width={48}
            height={48}
            alt="circl"
            className=""
          />
        </div>
        <section>
          <OnboardingFlow />
        </section>
      </section>
    </div>
  );
};

export default page;
