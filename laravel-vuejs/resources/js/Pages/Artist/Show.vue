<script setup>
defineProps({
    artist: Object
})
</script>

<template>
    <app-layout>
        <template #header>
            <h2 class="text-xl font-medium">{{ artist.name }}</h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <h2 class="bg-spotify-green text-white overflow-hidden shadow-sm sm:rounded p-2 text-center text-xl mb-4 font-bold" v-if="artist.albums">Albums</h2>
                <div class="flex gap-4 flex-wrap justify-center mb-8">
                    <div v-for="(album, index) in artist.albums" :key="index" class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2 w-[260px] hover:bg-spotify-green cursor-pointer hover:text-spotify-white duration-200 relative">
                        <div>
                            <img :src="album.cover" alt="album cover" class="object-contain h-full rounded-lg" />
                        </div>
                        <div class="p-1 flex flex-col justify-center">
                            <p class="font-medium">{{ album.title }}</p>
                        </div>
                        <inertia-link :href="route('album.show', album.id)" class="absolute top-0 left-0 w-full h-full"></inertia-link>
                    </div>
                </div>

                <h2 class="bg-spotify-green text-white overflow-hidden shadow-sm sm:rounded p-2 text-center text-xl mb-4 font-bold" v-if="artist.singles">Singles</h2>
                <div class="flex gap-4 flex-wrap justify-center">
                    <div v-for="(song, index) in artist.singles" :key="index" class="bg-white overflow-hidden shadow-sm sm:rounded p-2 w-[400px] h-[100px] flex gap-2">
                    <div>
                        <img :src="song.cover" alt="album cover" class="object-contain h-full rounded-lg" />
                    </div>
                    <div class="p-1 flex flex-col justify-center">
                        <p class="font-medium">{{ song.title }}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>
