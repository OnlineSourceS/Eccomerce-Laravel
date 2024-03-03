"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
   

  return !pathname.includes("admin") && !pathname.includes("auth") ? (
    <header className="flex items-center h-20 shadow-sm px-4 mb-8 w-full md:px-6">
      <Link className="mr-6" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <div className="flex-1" />
      <nav className="hidden space-x-4 lg:flex mx-6">
        <Link className="font-medium" href="/products">
          Products
        </Link>
        <Link className="font-medium" href="/orders">
          Orders
        </Link>
        <Link className="font-medium" href="/cart">
          Cart
        </Link>
      </nav>
      <div className="ml-auto hidden sm:flex items-center space-x-4 lg:space-x-6 mx-7">
        <Link
          className="text-white  dark:text-blackfont-medium bg-gray-900 hover:bg-gray-900/90 active:bg-gray-900/80 transition-colors rounded-md px-3 py-2 dark:bg-gray-50 dark:hover:bg-gray-50/90 dark:active:bg-gray-50/80"
          href="/auth/register"
        >
          Sign up
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="lg:hidden top-3 right-3"
            size="icon"
            variant="outline"
          >
            <MenuIcon className="h-4 w-4" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-2 p-4">
            <Link className="text-base font-medium" href="#">
              Products
            </Link>
            <Link className="text-base font-medium" href="#">
              Categories
            </Link>
            <Link className="text-base font-medium" href="#">
              Cart
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  ) : (
    <></>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
