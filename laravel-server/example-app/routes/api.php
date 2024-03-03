<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(["prefix"=> "user"], function () {

    Route::post('/register', [UserController::class,'register']);
    Route::post('/login', [UserController::class,'login']);

});



Route::middleware(['user', 'admin'])->group(function () {
    Route::get('/user', [UserController::class,'getUser']); 
});



Route::get('/products/{id}', [ProductController::class,'single']);
Route::get('/products', [ProductController::class,'index']);

Route::middleware(['user', 'admin'])->group(function(){
    Route::post('/products', [ProductController::class,'store']);
    Route::delete('/products/{id}', [ProductController::class,'delete']);
    Route::put('/products/{id}', [ProductController::class,'update']);
});



Route::middleware(['middleware', 'access'])->group(function(){
    
    Route::post('/reviews', [ReviewController::class,'store']); // add review to the product
    Route::get('/reviews', [ReviewController::class,'index']);  // get all reviews for the product
    Route::get('/reviews/{id}', [ReviewController::class,'single']);   // get single review details
    Route::delete('/reviews/{id}', [ReviewController::class,'delete']);    // delete single review
    Route::put('/reviews/{id}', [ReviewController::class,'update']);   // update 
});


Route::middleware(['middleware', 'access'])->group(function(){
    
    Route::post('/orders', [OrderController::class,'store']); // create order for specific customer, with its order items
    Route::get('/orders', [OrderController::class,'index']);  // get all orders regarding the specific customer
    Route::get('/orders/{id}', [OrderController::class,'single']);   // get single order details
    Route::delete('/orders/{id}', [OrderController::class,'delete']);    // delete single order
    Route::put('/orders/{id}', [OrderController::class,'update']);   // update order
});


Route::middleware(['middleware', 'access'])->group(function(){
    
    Route::post('/orders', [OrderController::class,'store']); // create order for specific customer, with its order items
    Route::get('/orders', [OrderController::class,'index']);  // get all orders regarding the specific customer
    Route::get('/orders/{id}', [OrderController::class,'single']);   // get single order details
    Route::delete('/orders/{id}', [OrderController::class,'delete']);    // delete single order
    Route::put('/orders/{id}', [OrderController::class,'update']);   // update order
});


Route::middleware('access')->get('/test', function (Request $request) {
    // return response()->json(['user' => auth()->user()]);
    // $product =  new Product;
    // $product->name = "dis product";
    // $product->user_id = auth()->user()->id;

    // $product->save();

    $products = User::with('products')->get();
    return response()->json(['uid' => $request->user()->id, 'productcreated' => $products]);
});






Route::get('/products', function () {
    // Logic to retrieve products
    return response()->json([]);
});

