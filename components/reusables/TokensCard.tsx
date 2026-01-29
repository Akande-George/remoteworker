import Image from "next/image";
import React from "react";
import TrackBar from "./TrackBar";
import { Button } from "../ui/button";

const TokensCard = () => {
  return (
    <div className="bg-[#FFF3F9] border border-[#FCBCDB] p-4 rounded-[16px] md:flex md:justify-between md:items-center space-y-3 md:space-y-0 gap-4">
      <div className="flex">
        <div className="p-3 rounded-[10px] bg-[#FEE9F3]">
          <Image
            src={`/token-icon.svg`}
            width={24}
            height={24}
            alt="token card"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-start items-center gap-2">
          <div className="sora-semibold text-[#161A21] text-[24px]">150</div>
          <div className="text-[14px] text-[#68123D]">AI Tokens</div>
        </div>
        <TrackBar progress={10} />
      </div>
      <Button className="w-full md:w-[125px]">
        <span className="">
          <Image src="/plus.svg" width={20} height={20} alt="plus icon" />
        </span>
        Get Tokens
      </Button>
    </div>
  );
};

export default TokensCard;
