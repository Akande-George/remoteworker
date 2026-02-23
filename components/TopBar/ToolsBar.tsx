import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const ToolsBar = () => {
  return (
    <div className="w-full flex justify-between items-center py-5 px-4 md:px-10 border-b border-[#E8E8E8] bg-white">
      <div>
        <Button className="" variant={`outline`}>
          <Image
            src={`/arrow-left-line.svg`}
            width={20}
            height={20}
            alt="arrow left"
          />
          Go back
        </Button>
      </div>
      <div className="flex justify-start items-center">
        <div className="bg-[#1FC16B] rounded-full w-[20.67px] h-[8px]"></div>
      </div>
    </div>
  );
};

export default ToolsBar;
