import Image from "next/image";
import React from "react";

export default function WelcomeLayout({
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
