<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    
    public function index($userId)
    {
        // Retrieve all orders for the specific user
        $orders = Order::where('user_id', $userId)->with('orderItems')->get();

        // Return the orders as JSON response
        return response()->json(['orders' => $orders], 200);
    }

    public function updateStatus(Request $request, $id)
    {
        // Find the order by ID
        $order = Order::find($id);

        // If the order doesn't exist, return error response
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'status' => 'required|string|in:processed,delivered,cancelled,shipped',
        ]);

        try {
            // Update the status of the order
            $order->status = $validatedData['status'];
            $order->save();

            // Return success response
            return response()->json(['message' => 'Order status updated successfully', 'order' => $order], 200);
        } catch (\Exception $e) {
            // If an error occurs during order status update, return error response
            return response()->json(['message' => 'Failed to update order status', 'error' => $e->getMessage()], 500);
        }
    }

    public function updateDetails(Request $request, $id)
    {
        // Find the order by ID
        $order = Order::find($id);

        // If the order doesn't exist, return error response
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'address' => 'required|string',
            'note' => 'nullable|string',
        ]);

        try {
            // Update the address and note of the order
            $order->address = $validatedData['address'];
            $order->note = $validatedData['note'] ?? $order->note;
            $order->save();

            // Return success response
            return response()->json(['message' => 'Order details updated successfully', 'order' => $order], 200);
        } catch (\Exception $e) {
            // If an error occurs during order details update, return error response
            return response()->json(['message' => 'Failed to update order details', 'error' => $e->getMessage()], 500);
        }
    }
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'status' => 'required|string',
            'address' => 'required|string',
            'note' => 'nullable|string',
            'items' => 'required|array',
            'items.*.product_id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        try {
            // Create a new order
            $order = new Order();
            $order->user_id = $validatedData['user_id'];
            $order->status = $validatedData['status'];
            $order->address = $validatedData['address'];
            $order->note = $validatedData['note'] ?? '';
            $order->save();

            // Create order items
            foreach ($validatedData['items'] as $item) {
                $orderItem = new OrderItem();
                $orderItem->order_id = $order->id;
                $orderItem->product_id = $item['product_id'];
                $orderItem->quantity = $item['quantity'];
                $orderItem->save();
            }

            // Return success response
            return response()->json(['message' => 'Order created successfully', 'order' => $order], 201);
        } catch (\Exception $e) {
            // If an error occurs during order creation, return error response
            return response()->json(['message' => 'Failed to create order', 'error' => $e->getMessage()], 500);
        }
    }
    public function show($id)
    {
        // Find the order by ID
        $order = Order::with('orderItems')->find($id);

        // If the order doesn't exist, return error response
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        // Return the order as JSON response
        return response()->json(['order' => $order], 200);
    }

}
