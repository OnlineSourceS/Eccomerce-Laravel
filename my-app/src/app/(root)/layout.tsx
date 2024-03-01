import { cn } from "@/lib/utils"
 import { Inter as FontSans } from "next/font/google"
 import "@/app/globals.css"

  

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children } ) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      > {children}
      </body>
    </html>
  )
}
