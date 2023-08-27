<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
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
        $artist = User::whereHas('albums')->inRandomOrder()->first();
        $album = fake()->randomElement([$artist->albums->random()->id, null]);
        return [
            'title' => fake()->sentence(2),
            'artist_id' => $artist->id,
            'album_id' => $album,
            'cover' => $album ? null : 'https://picsum.photos/520/520.jpg',
        ];
    }
}
