import React from "react";
import Orders from "./Orders";
import AdminLayout from "@/components/layouts/AdminLayout";

export default function page() {
  return (
    <AdminLayout>
      <Orders />
    </AdminLayout>
  );
}
