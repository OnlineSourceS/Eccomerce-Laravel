import * as React from "react";
import AdminSidebar from "../shared/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <AdminSidebar />
      {children}
    </section>
  );
}
