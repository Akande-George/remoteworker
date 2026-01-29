import Image from "next/image";
import React from "react";

export default function VerificationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[1440px] mx-auto p-4">{children}</body>
    </html>
  );
}
