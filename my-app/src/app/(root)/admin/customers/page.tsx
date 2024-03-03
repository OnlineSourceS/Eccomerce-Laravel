import AdminLayout from "@/components/layouts/AdminLayout";
import AdminDashboardInsightsBanner from "@/components/shared/AdminDashboardInsightsBanner";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontalIcon } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <div className="flex pt-1 flex-col gap-3">
        <div className=" shadow-sm rounded-lg p-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Customer</TableHead>
                <TableHead className="min-w-[150px]">Email</TableHead>
                <TableHead className="hidden md:table-cell">Phone</TableHead>
                <TableHead className="hidden md:table-cell">
                  Date Joined
                </TableHead>
                <TableHead className="text-right">Total Orders</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Olivia Martin</TableCell>
                <TableCell>olivia.martin@example.com</TableCell>
                <TableCell className="hidden md:table-cell">
                  (123) 456-7890
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  February 20, 2024
                </TableCell>
                <TableCell className="text-right">5</TableCell>
                <TableCell className="hidden sm:table-cell">Active</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Send Email</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ava Johnson</TableCell>
                <TableCell>ava.johnson@example.com</TableCell>
                <TableCell className="hidden md:table-cell">
                  (123) 456-7890
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  January 5, 2024
                </TableCell>
                <TableCell className="text-right">3</TableCell>
                <TableCell className="hidden sm:table-cell">Active</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Send Email</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Michael Johnson</TableCell>
                <TableCell>michael.johnson@example.com</TableCell>
                <TableCell className="hidden md:table-cell">
                  (123) 456-7890
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  August 3, 2023
                </TableCell>
                <TableCell className="text-right">1</TableCell>
                <TableCell className="hidden sm:table-cell">Inactive</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Send Email</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
