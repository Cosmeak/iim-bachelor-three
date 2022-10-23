<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'private',
        'user_id',
    ];

    public function songs()
    {
        return $this->belongsToMany(Song::class, 'playlists_songs');
    }

    public function collaborators()
    {
        return $this->belongsToMany(User::class, 'playlist_collaborators', 'playlist_id', 'user_id');
    }
}
