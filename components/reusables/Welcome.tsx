import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Welcome = () => {
  return (
    <div className="p-5 rounded-[16px] flex justify-between items-center bg-gradient-to-r from-[#FFF3F9] to-[#FFFFFF]">
      <div className="flex justify-start items-center gap-4">
        <div>
          <div className="mori-semibold text-[24px] text-[#161A21]">
            Welcome back! Adeife 👋
          </div>
          <div className="text-[14px] text-[#161A21]">
            Your goal: Land a 
            <span className="mori-semibold">Product Designer</span> role at 
            <span className="text-[#E9358F] mori-semibold">₦200K/month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
