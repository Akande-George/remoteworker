import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface ProcessModalProps {
  onClose?: () => void;
}

const ProcessModal: React.FC<ProcessModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 pt-2">
      <div className="animate-spin">
        <Image src={`/loader.svg`} width={40.52} height={40.52} alt="loader" />
      </div>
      <div className="text-[#161A21] mori-semibold text-[18px] text-center  w-[70%] mx-auto">
        Generating Resume
      </div>
      <div className="text-[#6A6D71] text-[14px] text-center  w-[70%] mx-auto">
        AI is generating your resume, this might take some time.{" "}
      </div>
      <div className="flex justify-center items-center border-t-2 border-[#E8E8E8] w-full pt-3 right-0 left-0">
        <Button className="h-[42px] px-10" onClick={onClose}>
          Stop generating
        </Button>
      </div>
    </div>
  );
};

export default ProcessModal;
