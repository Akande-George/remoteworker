"use client";

import "./globals.css";
import MenuSidebar from "@/components/Sidebar/MenuSidebar";
import TalentTopBar from "@/components/TopBar/TalentTopBar";
import { AuthProvider } from "@/context/AuthContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/queryClient";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import React from "react";

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

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleToggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <html lang="en">
      <body className="flex bg-white">
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {!hideLayout && (
              <>
                {/* Sidebar */}
                <div
                  className={`fixed left-0 top-0 h-full z-30 transition-transform duration-300 bg-white
                    w-[80vw] max-w-[275px] md:w-[275px] 
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                  `}
                >
                  <MenuSidebar />
                </div>
                {/* Overlay for mobile */}
                {sidebarOpen && (
                  <div
                    className="fixed inset-0 z-20 bg-black/30 md:hidden"
                    onClick={handleToggleSidebar}
                  />
                )}
                {/* Main content */}
                <div
                  className="flex-1 flex flex-col min-h-screen transition-all duration-300"
                  style={{
                    marginLeft: sidebarOpen ? "80vw" : "0",
                    // On desktop, always leave space for sidebar
                    ...(window.innerWidth >= 768 ? { marginLeft: 275 } : {}),
                  }}
                >
                  <div className="fixed left-0 md:left-[275px] top-0 right-0 z-20 w-full">
                    <TalentTopBar onToggleSidebar={handleToggleSidebar} />
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
