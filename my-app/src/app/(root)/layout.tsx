import { cn } from "@/lib/utils"
 import { Inter as FontSans } from "next/font/google"
 import "@/app/globals.css"
import { ReactNode } from "react"
import { Navbar } from "@/components/component/navbar"

  

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }:{children: ReactNode} ) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}

      >
          <Navbar />
        <main>
           {children}
          </main>
      </body>
    </html>
  )
}
