<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccessAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check() && Auth::user()) {
            
            // User is authenticated and is an admin, continue processing the request
            $res = Auth::user()->role === "admin" ? $next($request) : response()->json(['message' => 'You are not allowed to access the resource as (user)']); 
            return  $res;
            
        }        
        
        return response()->json([
        'message' => 'signup'    
        ]);
    }
}
