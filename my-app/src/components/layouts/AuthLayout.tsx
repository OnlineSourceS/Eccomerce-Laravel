import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex px-6 pt-20 justify-center items-center h-full  w-full">
      {children}
    </section>
  );
}
 