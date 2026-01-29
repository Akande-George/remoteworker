import Image from "next/image";
import React from "react";

export default function EventsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto py-4">{children}</div>
    </div>
  );
}
