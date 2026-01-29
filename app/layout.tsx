"use client";

import "./globals.css";
import MenuSidebar from "@/components/Sidebar/MenuSidebar";
import TalentTopBar from "@/components/TopBar/TalentTopBar";
import { AuthProvider } from "@/context/AuthContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/queryClient";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideLayout =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/subscribe");

  return (
    <html lang="en">
      <body className="flex">
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {!hideLayout && (
              <>
                <div className="fixed left-0 top-0 h-full z-30">
                  <MenuSidebar />
                </div>
                <div
                  className="flex-1 flex flex-col min-h-screen"
                  style={{ marginLeft: 275 }}
                >
                  <div className="fixed left-[275px] top-0 right-0 z-20">
                    <TalentTopBar />
                  </div>
                  <main className="flex-1 pt-[80px] p-4">{children}</main>
                </div>
              </>
            )}
            {hideLayout && (
              <main className="flex-1 min-h-screen">{children}</main>
            )}
          </AuthProvider>
        </QueryClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
