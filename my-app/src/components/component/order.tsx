/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/GP4ElSorjxX
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export function Order() {
  return (
    <>
      <Card className="m-2">
        <CardHeader>
          <CardTitle>Order #3102</CardTitle>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Placed on June 23, 2022</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            <Link className="text-blue-600 underline" href="#">
              Track package
            </Link>
            <div className="text-gray-500 dark:text-gray-400">Order #3102</div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-2 m-2">
        <Card>
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
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>Billing address</CardTitle>
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
        </Card>
      </div>
      <Card className="m-2">
        <CardHeader>
          <CardTitle>Items in this order</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/placeholder.svg"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">Glimmer Lamps</TableCell>
                <TableCell>2</TableCell>
                <TableCell>$60.00</TableCell>
                <TableCell>$120.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src="/placeholder.svg"
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">Aqua Filters</TableCell>
                <TableCell>3</TableCell>
                <TableCell>$16.33</TableCell>
                <TableCell>$49.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="m-2"> 
        <CardHeader>
          <CardTitle>Order status</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div />
            <div />
            <div />
            <div />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Return or contact support</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            If you have any issues with your order, you can contact customer support or initiate a return by clicking
            the button below.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Initiate return</Button>
          <Button className="ml-2" variant="outline">
            Contact support
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
