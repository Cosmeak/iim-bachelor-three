<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FriendController extends Controller
{
    public function index()
    {
        return Inertia::render('Friend/Index', [
            'friends' => auth()->user()->friends
        ]);
    }

    public function addFriend(User $friend)
    {
        $user = auth()->user();
        $user->friends()->attach($friend->id);
        return redirect()->route('user.show', $friend->id);
    }
}
