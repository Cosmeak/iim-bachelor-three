<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'avatar',
        'birthdate',
        'style',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function friends()
    {
        return $this->belongsToMany(User::class, 'friends', 'user_id', 'friend_id');
    }

    public function playlists()
    {
        return $this->hasMany(Playlist::class);
    }

    public function collaboratePlaylists()
    {
        return $this->belongsToMany(Playlist::class, 'playlist_collaborators', 'user_id', 'playlist_id');
    }

    public function albums()
    {
        return $this->hasMany(Album::class, 'artist_id', 'id');
    }

    public function songs()
    {
        return $this->hasMany(Song::class, 'artist_id', 'id');
    }

    public function singles()
    {
        return $this->songs()->whereNull('album_id');
    }

    public function publicPlaylists()
    {
        return $this->playlists()->where('private', false);
    }
}
