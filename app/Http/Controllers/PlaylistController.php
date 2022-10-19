<?php

namespace App\Http\Controllers;

use App\Models\Playlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
        $user = Inertia::getShared()['user'];
        return Inertia::render('Playlist/Index', [
            'playlists' => Playlist::where('user_id', $user->id)->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Playlist/_Form');
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
            'cover' => ['nullable'],
        ]);

        if ($request->cover) {
            $cover = Storage::disk('public')->put('playlist-covers', $request->file('cover'));
        }

        $playlist = Playlist::create([
            'name' => $request->name,
            'cover' => $cover ?? null
        ]);

        return redirect()->route('playlist.show', $playlist->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  Playlist $playlist
     * @return \Illuminate\Http\Response
     */
    public function show(Playlist $playlist)
    {
        return Inertia::render('Playlist/Show', [
            'playlist' => $playlist->load([
                'songs',
                'songs.album',
                'collaborators'
            ]),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Playlist $playlist)
    {
        return Inertia::render('Playlist/_Form', [
            'playlist' => $playlist
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \IlluminateHttp\Request  $request
     * @param  Playlist $playlist
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Playlist $playlist)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'cover' => ['nullable']
        ]);

        $playlist->update([
            'name' => $request->name
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Playlist $playlist)
    {
        $playlist->delete();
        return redirect()->route('playlist.index');
    }
}
