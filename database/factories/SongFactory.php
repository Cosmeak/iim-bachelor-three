<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Song>
 */
class SongFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $artist = User::where('role', 'artist')->inRandomOrder()->first();
        return [
            'title' => fake()->sentence(2),
            'artist' => $artist->id,
            'album_id' => fake()->randomElement([$artist->albums()->random()->id, null]),
            'cover' => fake()->image('/storage/app/public/covers', 520, 520),
            'song' => 'Y\'en a pas, trop la flemme de générer un faux audio :)'
        ];
    }
}
