<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'ratings' => 'nullable|numeric|min:0|max:5',
        ]);

        try {
            // Create a new product instance
            $product = new Product();
            $product->name = $validatedData['name'];
            $product->description = $validatedData['description'];
            $product->price = $validatedData['price'];
            $product->stock = $validatedData['stock'];
            $product->ratings = $validatedData['ratings'] ?? null; // If ratings not provided, set to null
            $product->user_id = auth()->user()->id; // Assuming you have authentication and you want to associate the product with the logged-in user
            $product->save();

            // Return success response
            return response()->json(['message' => 'Product created successfully', 'product' => $product], 201);
        } catch (\Exception $e) {
            // If an error occurs during product creation, return error response
            return response()->json(['message' => 'Failed to create product', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        // Find the product by ID
        $product = Product::find($id);

        // If the product doesn't exist, return error response
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'string|max:255',
            'description' => 'string',
            'price' => 'numeric|min:0',
            'stock' => 'integer|min:0',
            'ratings' => 'nullable|numeric|min:0|max:5',
        ]);

        try {
            // Update the product with the validated data
            $product->update($validatedData);

            // Return success response
            return response()->json(['message' => 'Product updated successfully', 'product' => $product], 200);
        } catch (\Exception $e) {
            // If an error occurs during product update, return error response
            return response()->json(['message' => 'Failed to update product', 'error' => $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        // Find the product by ID
        $product = Product::find($id);

        // If the product doesn't exist, return error response
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Return the product as JSON response
        return response()->json(['product' => $product], 200);
    }
    public function destroy($id)
    {
        // Find the product by ID
        $product = Product::find($id);

        // If the product doesn't exist, return error response
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        try {
            // Delete the product
            $product->delete();

            // Return success response
            return response()->json(['message' => 'Product deleted successfully'], 200);
        } catch (\Exception $e) {
            // If an error occurs during product deletion, return error response
            return response()->json(['message' => 'Failed to delete product', 'error' => $e->getMessage()], 500);
        }
    }

    public function index()
    {
        // Retrieve all products
        $products = Product::all();

        // Return the products as JSON response
        return response()->json(['products' => $products], 200);
    }
}
