<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'artist',
        'type',
        'cover',
    ];

    /**
     * Auto-set values
     * @return void
     */
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($query) {
            $query->slug = strtolower(str_replace(' ', '-', $query->title));
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
     * Return artist of the song
     * @return void
     */
    public function artist()
    {
        return $this->belongsTo(User::class, 'artist', 'id');
    }
}
