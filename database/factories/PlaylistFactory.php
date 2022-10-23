<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PlaylistFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->sentence(1),
            'description' => fake()->randomElement([fake()->sentence(), null]),
            'private' => fake()->boolean(),
            'user_id' => User::inRandomOrder()->first()->id,
            'cover' => null,
        ];
    }
}
