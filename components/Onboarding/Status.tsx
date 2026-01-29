import React from "react";
import { Label } from "@/components/ui/label";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const Status = () => {
  return (
    <div>
      <div className="sora-semibold text-[24px] md:text-[24px] leading-[32px] md:leading-[40px] pt-8 text-[#161A21] text-center">
        Your employment status
      </div>
      <div className="text-center text-[#6A6D71] text-[16px] mt-2">
        What's your current employment status?
      </div>
      <section>
        <RadioGroup defaultValue="plus" className="">
          <FieldLabel htmlFor="plus-plan">
            <Field orientation="horizontal">
              <RadioGroupItem value="plus" id="plus-plan" />
              <FieldContent className="flex-row justify-start items-center">
                <FieldDescription>Pay with Card (Paystack)</FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
        </RadioGroup>
      </section>
    </div>
  );
};

export default Status;
