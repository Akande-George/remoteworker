import React from "react";
import Image from "next/image";
import ProgressBar from "../reusables/ProgressBar";
import Task from "../reusables/Task";
const Tasks = () => {
  return (
    <div
      className="border border-[#E8E8E8] rounded-[24px] p-3 space-y-4 bg-white"
      style={{
        boxShadow: "0px 1px 2px 0px #0A0D1408",
      }}
    >
      <section className="md:flex md:justify-between md:items-center">
        <div className="flex justify-start items-center gap-2">
          <Image src={`/focus-icon.svg`} width={24} height={24} alt="focus" />
          <div className="text-[#161A21] mori-semibold text-[16px]">
            Your Tasks for Today
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          <div className="text-[#6A6D71] text-[14px]">0/3 Completed</div>
          <Image
            src={`/restart-line.svg`}
            width={24}
            height={24}
            alt="restart-line"
          />
        </div>
      </section>
      <section className="space-y-3">
        <Task />
        <Task />
        <Task />
      </section>
    </div>
  );
};

export default Tasks;
