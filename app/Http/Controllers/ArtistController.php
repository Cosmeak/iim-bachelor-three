<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArtistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Artist/Index', [
            'artists' => User::where('role', 'artist')->get(),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $artist)
    {
        return Inertia::render('Artist/Show', [
            'artist' => $artist->load('albums', 'songs')
        ]);
    }
}
