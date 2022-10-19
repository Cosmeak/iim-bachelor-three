<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Album>
 */
class AlbumFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->sentence(2),
            'artist' => User::inRandomOrder()->first()->id,
            'type' => fake()->randomElement(['album', 'ep']),
            'cover' => fake()->image('/storage/app/public/covers', 520, 520)
        ];
    }
}
