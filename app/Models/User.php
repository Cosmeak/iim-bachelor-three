<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     * @var array<int, string>
     */
    protected $fillable = [
        'slug',
        'name',
        'email',
        'password',
        'role',
        'avatar',
        'birthday',
        'style',
    ];

    /**
     * Auto-set values
     * @return void
     */
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($query) {
            $query->slug = Str::uuid();
        });
    }

    /**
     * Get the route key for the model.
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * The attributes that should be hidden for serialization.
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Return all user's friends
     * @return void
     */
    public function friends()
    {
        return $this->belongsToMany(User::class, 'friends', 'user_id', 'friend_id');
    }

    /**
     * Return user's playlists
     * @return void
     */
    public function playlist()
    {
        return $this->hasMany(Playlist::class);
    }

    /**
     * Return albums of the artist
     * @return void
     */
    public function albums()
    {
        return $this->hasMany(Album::class);
    }

    /**
     * Return songs of the artist
     * @return void
     */
    public function songs()
    {
        return $this->hasMany(Song::class);
    }
}
