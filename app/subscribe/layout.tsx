import Image from "next/image";
import React from "react";

export default function SubscribeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto p-8">{children}</div>
    </div>
  );
}
