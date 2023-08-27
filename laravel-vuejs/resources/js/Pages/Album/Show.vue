<script setup>
defineProps({
    album: Object
})
</script>

<template>
    <app-layout>
        <template #header>
            <div class="flex h-full gap-2 align-center">
                <div class="h-full">
                    <img :src="album.cover" alt="album cover" class="h-[60px] object-contain rounded">
                </div>
                <div class="flex flex-col justify-center">
                    <p>{{ album.title }}</p>
                    <inertia-link :href="route('artist.show', album.artist.id)" class="text-sm opacity-80 hover:underline">{{ album.artist.name }}</inertia-link>
                </div>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex gap-4 flex-wrap justify-center">
                <div v-for="(song, index) in album.songs" :key="index" class="bg-white overflow-hidden shadow-sm sm:rounded p-2 w-[400px] h-[100px] flex gap-2">
                    <div>
                        <img :src="album.cover" alt="album cover" class="object-contain h-full rounded-lg" />
                    </div>
                    <div class="p-1 flex flex-col justify-center">
                        <p class="font-medium">{{ song.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>
