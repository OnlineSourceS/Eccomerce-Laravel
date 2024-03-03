<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; 
use App\Models\User;

class UserController extends Controller
{ 

    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users',
            'role' => 'string|required',
            'profile' => 'string',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role  ,
            'profile' => $request->profile ? $request->profile : '',
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('auth_token', [], now()->addHour(1))->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken('auth_token', [], now()->addHours(3));

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function getUser(Request $request){
        return response()->json(['user' => $request->user()]);
    }
}
