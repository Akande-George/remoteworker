import React from "react";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { Button } from "../ui/button";
const Task = () => {
  return (
    <div className="border border-[#E8E8E8] rounded-[12px] p-3">
      <section className="flex justify-start gap-3">
        <Checkbox />
        <div className="grid grid-cols-1 md:grid-cols-7">
          <div className="md:col-span-6 md:w-[90%] space-y-3 md:space-y-0">
            <div className="flex justify-start items-center gap-2">
              <div className="text-[#E16614] text-[12px] bg-[#FFF3EB] rounded-full px-2 mori-semibold">
                URGENT
              </div>
              <div className="flex justify-start items-center gap-1">
                <Image
                  src={`/time-line.svg`}
                  width={16}
                  height={16}
                  alt="time line"
                />
                <div className="text-[#6A6D71] text-[12px] pt-[1px]">
                  30Mins
                </div>
              </div>
            </div>
            <div className="text-[#161A21] text-[16px] mori-semibold pt-1 pb-1">
              Optimize your Product Design resume with the AI Resume Optimizer
            </div>
            <div className="text-[14px] text-[#6A6D71]">
              Why: Since you are targeting a high-salary role ($750k+) with no
              professional experience, your resume must highlight your advanced
              Figma and Design Systems skills to pass ATS filters and impress
              recruiters.
            </div>
          </div>
          <div className="md:col-span-1 py-4 md:py-0">
            <Button className="px-3">
              Optimize resume
              <Image
                src={`apply-icon.svg`}
                width={20}
                height={20}
                alt="arrow"
              />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Task;
