import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import AdminLayout from "@/components/layouts/AdminLayout";
import React from "react";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TrashIcon,
} from "lucide-react";

export default function OrderDetails() {
  return (
    <AdminLayout>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center gap-4">
          <Button size="icon" variant="outline">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="font-semibold text-lg md:text-xl">
            #3102 -
            <span className="font-normal text-gray-500 dark:text-gray-400">
              Sophia Anderson
            </span>
            <span className="font-normal text-gray-500 dark:text-gray-400">
              on June 23, 2022
            </span>
          </h1>
          <div className="ml-auto flex items-center gap-2">
            <Button size="icon" variant="outline">
              <ChevronLeftIcon className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button size="icon" variant="outline">
              <ChevronRightIcon className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
          <div className="md:col-span-4 lg:col-span-4 xl:col-span-4 flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Products</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px] hidden md:table-cell">
                        Image
                      </TableHead>
                      <TableHead className="max-w-[150px]">Name</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="hidden md:table-cell">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/placeholder.svg"
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        Glimmer Lamps
                      </TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>$120.00</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Button size="icon" variant="outline">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="hidden md:table-cell">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src="/placeholder.svg"
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        Aqua Filters
                      </TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>$49.00</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Button size="icon" variant="outline">
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Payment</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center">
                  <div>Subtotal</div>
                  <div className="ml-auto">$169.00</div>
                </div>
                <div className="flex items-center">
                  <div>Discount</div>
                  <div className="ml-auto">-$19.00</div>
                </div>
                <Separator />
                <div className="flex items-center font-medium">
                  <div>Total</div>
                  <div className="ml-auto">$150.00</div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <Button size="sm">Collect payment</Button>
                <Button size="sm" variant="outline">
                  Send invoice
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col gap-6">
            <Card>
              <div>
                <CardHeader className="flex flex-row items-center space-y-0">
                  <CardTitle>Customer</CardTitle>
                  <Button className="ml-auto" variant="secondary">
                    Edit
                  </Button>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="grid gap-1">
                    <Link className="text-blue-600 underline" href="#">
                      Sophia Anderson
                    </Link>
                    <div>23 total orders</div>
                  </div>
                </CardContent>
              </div>
              <Separator />
              <div>
                <CardHeader>
                  <CardTitle>Contact information</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div className="grid gap-1">
                    <Link className="text-blue-600" href="#">
                      sophia@example.com
                    </Link>
                    <div className="text-gray-500 dark:text-gray-400">
                      +1 888 8888 8888
                    </div>
                  </div>
                </CardContent>
              </div>
              <Separator />
              <div>
                <CardHeader>
                  <CardTitle>Shipping address</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <div>
                    Sophia Anderson
                    <br />
                    1234 Main St.
                    <br />
                    Anytown, CA 12345
                  </div>
                </CardContent>
              </div>
              <Separator />
              <div>
                <CardHeader>
                  <CardTitle>Billing address</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Same as shipping address
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </AdminLayout>
  );
}
