export interface Product {
    id: number;
    user: string | number;
    name: string;
    description: string;
    stock: number;
    price: number;
    ratings: number;
    isFeatured: boolean;
    created_at: string;
    updated_at: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    profile?: string;
    email_verified_at: string | null;
    remember_token?: string;
    created_at: string;
    updated_at: string;
}


export interface OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    created_at: Date;
    updated_at: Date;
}

export interface Order {
    id: number;
    user: number | string;
    status: 'processed' | 'delivered' | 'cancelled' | 'shipped';
    address: string;
    note: string;
    orderItems: OrderItem[];
    created_at: Date;
    updated_at: Date;
}

