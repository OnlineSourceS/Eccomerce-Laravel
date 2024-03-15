<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        try {

            $cart = Cart::all();

            response()->json([
                "message" => "Successfully Fetched The Cart",
                'cart' => $cart
            ], 200);
        } catch (\Exception $e) {
            response()->json([
                "error" => $e->getMessage(),
                "message" => "Error Occured While Fetching all fetching The Cart"
            ]);
        }
    }
    
    public function show(string $id)
    {
        try {
            $cart = Cart::find($id);
            if ($cart) {
                return response()->json([
                    "message" => "Can't Find The Cart",
                    "cart" => $cart
                ], 200);
            }
            return response()->json([
                "message" => "Successfully Fetched Cart Details",
                "cart" => $cart
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Error While Fetching Cart",
                "error" => $e
            ], 200);
        }
    }

    public function store(Request $req)
    {
        try { 
            
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Error, Whlie Storing The Cart",
                "error" => $e
            ], 200);
        }
    }
}

S;