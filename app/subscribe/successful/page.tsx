import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center border-b border-[#E8E8E8] pb-6">
        <Image src={`/logo.svg`} width={101} height={32.15} alt="logo" />
        <div className="text-[#161A21] text-[16px]">
          Already have an account?{" "}
          <Link href={"/login"} className="text-[#322FEB] underline">
            Sign In
          </Link>
        </div>
      </div>
      <section className="w-[500px] mx-auto pt-24">
        <div className="flex justify-center items-center">
          <Image
            src={`/box-circle.svg`}
            width={72}
            height={72}
            alt="circl"
            className=""
          />
        </div>
        <div className="text-center  text-[#161A21] text-[32px] sora-semibold">
          We received your payment!
        </div>
        <div className="text-center text-[#6A6D71] text-[16px]">
          Hi Adeife! You have successfully subscribed for a Standard Plan and
          your payment has successfully been processed. Now you can proceed to
          create an account.
        </div>
        <div className="flex justify-center items-center pt-8">
          <Button className="px-14">Create an account</Button>
        </div>
      </section>
    </div>
  );
};

export default page;
