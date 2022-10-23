<?php

namespace App\Http\Controllers;

use App\Models\Playlist;
use App\Models\Song;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlaylistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Playlist/Index', [
            'playlists' => Playlist::where('private', false)->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Playlist/Create', [
            'songs' => Song::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'description' => ['required', 'sring'],
            'cover' => ['nullable'],
            'private' => ['required', 'boolean']
        ]);

        Playlist::create(array_merge($request->all(),['user_id' => auth()->user()->id]));

        return redirect()->route('playlist.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Playlist $playlist)
    {
        return Inertia::render('Playlist/Show', [
            'playlist' => $playlist->load('songs')
        ]);
    }

    public function addSong(Playlist $playlist, Song $song)
    {
        $playlist->songs()->attach($song->id);
        return back();
    }

    public function removeSong(Playlist $playlist, Song $song)
    {
        $playlist->songs()->detach($song->id);
        return back();
    }
}
