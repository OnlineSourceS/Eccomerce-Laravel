import { AdminDashboardHome } from "@/components/component/admin-dashboard-home";
import AdminLayout from "@/components/layouts/AdminLayout";
import React from "react";

export default function AdminPage() {
  return (
    <AdminLayout>
      <AdminDashboardHome />
    </AdminLayout>
  );
}
