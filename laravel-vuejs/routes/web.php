<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\AppController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\FriendController;
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

Route::middleware('auth')->group(function () {
    Route::get('/', [AppController::class, 'index'])->name('dashboard');
    Route::get('/friend', [FriendController::class, 'index'])->name('friend.index');
    Route::post('/friend/{friend}/add', [FriendController::class, 'addFriend'])->name('friend.add');
    Route::resource('album', AlbumController::class);
    Route::resource('artist', ArtistController::class);
    Route::resource('playlist', PlaylistController::class);
    Route::resource('user', UserController::class);
    Route::resource('song', SongController::class);
    Route::post('/{playlist}/{song}', [PlaylistController::class, 'addSong'])->name('playlist.add-song');
    Route::delete('/{playlist}/{song}', [PlaylistController::class, 'removeSong'])->name('playlist.remove-song');
});

require __DIR__.'/auth.php';
