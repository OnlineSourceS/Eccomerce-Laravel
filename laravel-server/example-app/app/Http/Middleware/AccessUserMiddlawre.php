<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;

class AccessUserMiddlawre
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
        $token = $request->header("Authorization");
        if($token){
            try{
                
                $foundToken = PersonalAccessToken::findToken($token);   
    
                $decodedUser = $foundToken->tokenable;
                auth()->setUser($decodedUser);
                return $next($request);

            }   catch(\Exception $e){
                return response() ->json(['message' => "You Are not Authorized"], 401);
            }

        }

        return response()->json([
            'error'=> 'Un authenticted or Expired Token, send-token through Headers (Authorization), authorized'
        ], 401);
    }
}
