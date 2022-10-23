<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'artist',
        'cover',
    ];

    public function artist()
    {
        return $this->belongsTo(User::class, 'artist_id', 'id');
    }

    public function songs()
    {
        return $this->hasMany(Song::class, 'album_id');
    }
}
