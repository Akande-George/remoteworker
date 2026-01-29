import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const BecomeATalent = () => {
  return (
    <div className="bg-[#FFF3EB] border border-[#FFE6D5] p-5 rounded-[16px] flex justify-between items-center">
      <div className="flex justify-start items-center gap-4">
        <div className="bg-[#FFE6D5] p-2 rounded-[10px]">
          <Image
            src={`/gift-line.svg`}
            width={24}
            height={24}
            alt="gift line"
          />
        </div>
        <div>
          <div className="mori-semibold text-[16px] text-[#161A21]">
            Become a Vetted Talent
          </div>
          <div className="text-[14px] text-[#71330A]">
            Finish setting up your profile to unlock more features
          </div>
        </div>
      </div>
      <Button className="bg-[#FA7319] hover:bg-[#FA7319]/80">
        Apply Now{" "}
        <Image
          src={`/apply-icon.svg`}
          width={20}
          height={20}
          alt="apply now"
        />{" "}
      </Button>
    </div>
  );
};

export default BecomeATalent;
