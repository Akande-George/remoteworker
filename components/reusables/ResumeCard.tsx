"use client";
import Image from "next/image";
import React from "react";
import { RadioGroupItem } from "@/components/ui/radio-group";

interface ResumeCardProps {
  image: string;
  title: string;
  description: string;
  colors: string[];
  value: string;
  isSelected?: boolean;
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  image,
  title,
  description,
  colors,
  value,
  isSelected = false,
}) => {
  return (
    <div
      className={`bg-white border p-3 rounded-[12px] relative cursor-pointer transition-all ${
        isSelected ? "border-[2px] border-[#322FEB]" : "border border-[#E8E8E8]"
      }`}
      style={{
        boxShadow: `
          0px 96px 96px -32px #3333330F,
          0px 48px 48px -24px #3333330A,
          0px 24px 24px -12px #3333330A,
          0px 12px 12px -6px #3333330A,
          0px 6px 6px -3px #3333330A,
          0px 3px 3px -1.5px #33333305,
          0px 1px 1px 0.5px #3333330A,
          0px 0px 0px 1px #3333330A,
          0px -1px 1px -0.5px #3333330F inset
        `,
      }}
    >
      <div className="absolute top-3 right-3 z-10">
        <RadioGroupItem value={value} id={value} />
      </div>
      <div className="bg-[#F7F7F7] p-1 rounded-[8px] md:flex md:justify-center md:items-center">
        <Image
          src={image}
          width={278}
          height={296}
          alt={title}
          className="w-full"
        />
      </div>
      <div className="p-2">
        <div className="text-[#161A21] text-[16px] mori-semibold">{title}</div>
        <div className="text-[#6A6D71] text-[14px]">{description}</div>
        <div className="flex justify-start items-center space-x-2 pt-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-[21px] h-[21px] rounded-[5px] ${
                index === 0 ? "border-[1.5px] border-[#5335E9]" : ""
              }`}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
