<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginControler extends Controller
{
    public function index(Request $request):Response
    {
        $credentials = $request->only('email', 'password');
        if(Auth::attempt($credentials)){
            return response(Auth::user(), 200);
        }

        abort(400);
    }

    public function logout(){
        return response(null, 200);
    }
}
