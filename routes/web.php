<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\SongController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('album', AlbumController::class);
    Route::resource('artist', ArtistController::class);
    Route::resource('playlist', PlaylistController::class);
    Route::resource('user', UserController::class);
    Route::resource('song', SongController::class);

    Route::post('/{playlist}/{song}', [PlaylistController::class, 'addSong'])->name('playlist.add-song');
    Route::delete('/{playlist}/{song}', [PlaylistController::class, 'removeSong'])->name('playlist.remove-song');
});

require __DIR__.'/auth.php';
