<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AppController extends Controller
{
    /**
     * Home page for app
     * @return void
     */
    public function index()
    {
        return Inertia::render('Home');
    }

    /**
     * Return result for search
     * @return void
     */
    public function search()
    {

    }
}
