<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function update(Request $request, $id)
    {
        // Find the review by ID
        $review = Review::find($id);

        // If the review doesn't exist, return error response
        if (!$review) {
            return response()->json(['message' => 'Review not found'], 404);
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'content' => 'string',
            'rating' => 'numeric|min:0|max:5',
        ]);

        try {
            // Update the review with the validated data
            $review->update($validatedData);

            // Return success response
            return response()->json(['message' => 'Review updated successfully', 'review' => $review], 200);
        } catch (\Exception $e) {
            // If an error occurs during review update, return error response
            return response()->json(['message' => 'Failed to update review', 'error' => $e->getMessage()], 500);
        }
    }
    public function index($productId)
    {
        // Find the product by ID
        $product = Product::find($productId);

        // If the product doesn't exist, return error response
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Retrieve all reviews of the product
        $reviews = $product->reviews;

        // Return the reviews as JSON response
        return response()->json(['reviews' => $reviews], 200);
    }

    public function store(Request $request, $productId)
    {
        // Find the product by ID
        $product = Product::find($productId);

        // If the product doesn't exist, return error response
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'content' => 'required|string',
            'rating' => 'required|numeric|min:0|max:5',
        ]);

        try {
            // Create a new review for the product
            $review = new Review();
            $review->content = $validatedData['content'];
            $review->rating = $validatedData['rating'];
            $review->product()->associate($product); // Associate the review with the product
            $review->save();

            // Return success response
            return response()->json(['message' => 'Review created successfully', 'review' => $review], 201);
        } catch (\Exception $e) {
            // If an error occurs during review creation, return error response
            return response()->json(['message' => 'Failed to create review', 'error' => $e->getMessage()], 500);
        }
    }
    public function destroy($id)
    {
        // Find the review by ID
        $review = Review::find($id);

        // If the review doesn't exist, return error response
        if (!$review) {
            return response()->json(['message' => 'Review not found'], 404);
        }

        try {
            // Delete the review
            $review->delete();

            // Return success response
            return response()->json(['message' => 'Review deleted successfully'], 200);
        } catch (\Exception $e) {
            // If an error occurs during review deletion, return error response
            return response()->json(['message' => 'Failed to delete review', 'error' => $e->getMessage()], 500);
        }
    }
}
