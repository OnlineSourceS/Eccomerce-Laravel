import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "@/app/globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/component/navbar";
import { AuthProvider } from "@/providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen bg-background font-sans antialiased")}>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
