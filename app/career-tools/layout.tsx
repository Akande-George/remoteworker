import React from "react";

export default function CareerToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto p-4">{children}</div>
    </div>
  );
}
