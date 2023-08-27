<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Album;
use App\Models\Playlist;
use App\Models\Song;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        Schema::disableForeignKeyConstraints();

        // Clear database
        User::truncate();
        DB::table('password_resets')->truncate();
        DB::table('failed_jobs')->truncate();
        DB::table('personal_access_tokens')->truncate();
        Album::truncate();
        Song::truncate();
        Playlist::truncate();
        DB::table('friends')->truncate();
        DB::table('playlist_collaborators')->truncate();
        DB::table('playlists_songs')->truncate();

        // Seed tables
        $users = User::factory(10)->create();
        Album::factory(25)->create();
        Song::factory(100)->create();

        $users->each(function($user) use($users) {
            $user->friends()->attach($users->where('id', '!=', $user->id)->random(3)->pluck('id'));
            Playlist::factory(1)->create()->each(function($playlist) use($users, $user){
                $playlist->songs()->attach(Song::inRandomOrder()->limit(5)->pluck('id'));
                $playlist->collaborators()->attach($users->where('id', '!=', $user->id)->random()->id);
            });
        });

        Schema::enableForeignKeyConstraints();
        Model::reguard();
    }
}
