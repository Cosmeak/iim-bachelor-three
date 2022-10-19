<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Song/Index', [
            'songs' => Song::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Song/_Form');
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
            'title' => ['required', 'string', 'max:255'],
            'cover' => ['nullable', File::types(['png', 'jpgeg', 'jpg'])],
            'song' => ['required', File::type(['mp3', 'm4a', 'wav'])],
        ]);

        $artist = Inertia::getShared()['user'];
        $cover = Storage::disk('public')->put('cover', $request->file('cover'));
        $song = Storage::disk('public')->put('cover', $request->file('song'));

        Song::create([
            'title' => $request->title,
            'artist' => $artist->id,
            'cover' => $cover ?? null,
            'song' => $song,
        ]);

        return redirect()->route('song.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  Song  $song
     * @return \Illuminate\Http\Response
     */
    public function show(Song $song)
    {
        return Inertia::render('Song/Show', [
            'song' => $song->load(['artist', 'album']),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Song $song)
    {
        $song->delete();
        return redirect()->route('home');
    }
}
