import Image from "next/image";
import React from "react";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <div>
        <div className="bg-white min-h-screen">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white flex flex-col justify-center  min-h-screen p-4">
              <section className="md:w-[500px] mx-auto space-y-3">
                <div className="flex justify-center">
                  <Image
                    src={`/logo.svg`}
                    width={101}
                    height={32.15}
                    alt="logo"
                  />
                </div>
                <div className="sora-semibold text-[24px] md:text-[24px] leading-[32px] md:leading-[40px] pt-8 text-[#161A21] text-center">
                  Welcome back to Remote Work
                  <span className="sora-semibold text-[#322FEB]">her</span>
                </div>
                <div className="text-[#6A6D71] text-center text-[16px]">
                  Sign in to your account to continue
                </div>
                <div className="mt-8">{children}</div>
              </section>
            </div>
            <div className=""></div>
          </section>
        </div>
      </div>
    </div>
  );
}
