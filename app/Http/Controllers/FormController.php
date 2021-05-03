<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function store()
    {
        var_dump(request('name'));
        var_dump(request('email'));
    }
}
