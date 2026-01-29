import PricingTab from "@/components/tabs/PricingTab";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
          <Link href={"/login"} className="text-[#E9358F] underline">
            Sign In
          </Link>
        </div>
      </div>
      <section className="pt-10 w-[540px] mx-auto">
        <h1 className="sora-semibold text-[30px] leading-[40px] text-center">
          Membership Payment
        </h1>
        <p className="text-[#6A6D71] text-[16px] leading-[24px] text-center">
          Complete your membership payment
        </p>
        <section className="pt-6 space-y-3 border-b border-[#E8E8E8] pb-5">
          <div className="flex justify-between items-center text-[#6A6D71] text-[14px]">
            <div>Subscription Type</div>
            <div className="text-[#161A21]">Standard</div>
          </div>
          <div className="flex justify-between items-center text-[#6A6D71] text-[14px]">
            <div>Subscription Type</div>
            <div className="text-[#161A21] text-[16px] mori-semibold">
              ₦10,000/month
            </div>
          </div>
        </section>
        <section className="pt-6">
          <div className="space-y-1">
            <Label htmlFor="email" className="text-[#161A21] text-[14px]">
              Email for Receipt
            </Label>
            <Input id="email" placeholder="hello@alignui.com" type="email" />
          </div>
        </section>
        <section className="pt-6">
          <Label htmlFor="method" className="text-[#161A21] text-[14px] mb-2">
            Payment Method
          </Label>
          <div>
            <RadioGroup defaultValue="plus" className="">
              <FieldLabel htmlFor="plus-plan">
                <Field orientation="horizontal">
                  <FieldContent className="flex-row justify-start items-center">
                    <FieldTitle>
                      <Image
                        src={`/card.svg`}
                        width={20}
                        height={20}
                        alt="card"
                      />
                    </FieldTitle>
                    <FieldDescription>
                      Pay with Card (Paystack)
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="plus" id="plus-plan" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="pro-plan">
                <Field orientation="horizontal">
                  <FieldContent className="flex-row justify-start items-center">
                    <FieldTitle>
                      <Image
                        src={`/bank.svg`}
                        width={20}
                        height={20}
                        alt="card"
                      />
                    </FieldTitle>
                    <FieldDescription>Bank Transfer</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="pro" id="pro-plan" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="enterprise-plan">
                <Field orientation="horizontal">
                  <FieldContent className="flex-row justify-start items-center">
                    <FieldTitle>
                      <Image
                        src={`/ussd.svg`}
                        width={20}
                        height={20}
                        alt="card"
                      />
                    </FieldTitle>
                    <FieldDescription>Pay with USSD</FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="enterprise" id="enterprise-plan" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </div>
        </section>
        <section className="pt-6">
          <Button className="w-full">Complete payment</Button>
        </section>
        <div className="flex justify-center items-center gap-2 pt-6">
          <Image src={`/shield-line.svg`} width={18} height={18} alt="logo" />
          <div className="text-[#6A6D71] text-[16px]">
            Secure payment powered by Paystack
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
