import { PackageIcon, ShoppingCartIcon, UsersIcon } from "lucide-react";

export const adminSidebarLinks = [
  {
    id: "admin1",
    label: "Home",
    path: "/admin/dashboard",
    icon: <PackageIcon className="h-4 w-4" />,
  },
  {
    id: "admin2",
    label: "Orders",
    path: "/admin/orders",
    icon: <ShoppingCartIcon className="h-4 w-4" />,
  },
  {
    id: "admin3",
    label: "Customers",
    path: "/admin/customers",
    icon: <UsersIcon className="h-4 w-4" />,
  },
];


export const orders = [
  {
    id: '#3210',
    customer: 'Olivia Martin',
    store: 'Online Store',
    date: 'February 20, 2024',
    amount: '$42.25',
    status: 'Shipped',
  },
  {
    id: '#5678',
    customer: 'John Smith',
    store: 'Electronics Store',
    date: 'March 5, 2024',
    amount: '$128.50',
    status: 'Processing',
  },
  {
    id: '#9123',
    customer: 'Emma Johnson',
    store: 'Fashion Boutique',
    date: 'March 10, 2024',
    amount: '$75.00',
    status: 'Delivered',
  },
  {
    id: '#4567',
    customer: 'Michael Davis',
    store: 'Home Goods Store',
    date: 'March 15, 2024',
    amount: '$92.75',
    status: 'Shipped',
  },
];
 