<script setup>
defineProps({
    albums: Array
})
</script>

<template>
    <app-layout>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex gap-4 flex-wrap justify-center">
                <div v-for="(album, index) in albums" :key="index" class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2 w-[260px] hover:bg-spotify-green cursor-pointer hover:text-spotify-white duration-200 relative">
                    <div>
                        <img :src="album.cover" alt="album cover" class="w-full h-4/6 object-cover rounded" />
                    </div>
                    <div class="p-1">
                        <p>{{ album.title }}</p>
                        <p class="text-sm opacity-80">{{ album.artist.name }}</p>
                    </div>
                    <inertia-link :href="route('album.show', album.id)" class="absolute top-0 left-0 w-full h-full"></inertia-link>
                </div>
            </div>
        </div>
    </app-layout>
</template>
