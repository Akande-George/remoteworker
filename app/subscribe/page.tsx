import PricingTab from "@/components/tabs/PricingTab";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center border-b border-[#E8E8E8] pb-6 p-6">
        <Image src={`/logo.svg`} width={101} height={32.15} alt="logo" />
        <div className="text-[#161A21] text-[16px]">
          Already have an account?{" "}
          <Link href={"/login"} className="text-[#E9358F] underline">
            Sign In
          </Link>
        </div>
      </div>
      <section className="pt-10">
        <h1 className="sora-semibold text-[30px] leading-[40px] text-center">
          Choose your membership
        </h1>
        <p className="text-[#6A6D71] text-[16px] leading-[24px] text-center">
          Join 10,000+ Nigerian women building thriving careers. Pick the plan
          that works for you.
        </p>
        <div className="pt-10">
          <PricingTab />
        </div>
        <div className="text-[#6A6D71] text-[18px] text-center pt-8">
          Cancel anytime. No hidden fees. 7-day money-back guarantee.
        </div>
      </section>
    </div>
  );
};

export default page;
