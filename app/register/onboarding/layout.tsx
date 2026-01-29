import Image from "next/image";
import React from "react";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <div className="max-w-[1440px] mx-auto p-4">{children}</div>
    </div>
  );
}
