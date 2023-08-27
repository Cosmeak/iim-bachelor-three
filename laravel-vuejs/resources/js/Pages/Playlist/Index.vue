<script setup>
defineProps({
    playlists: Array
})
</script>

<template>
    <app-layout>
        <template #header>
            <inertia-link :href="route('playlist.create')" class="bg-spotify-green px-2 py-1 rounded text-white text-sm hover:bg-spotify-black duration-200">Créer une playlist</inertia-link>
        </template>
        <div class="py-12 h-full w-full">
            <div class="max-w-7xl h-full mx-auto sm:px-6 lg:px-8 flex gap-4 flex-wrap justify-center ">
                <div v-for="(playlist, index) in playlists" :key="index" class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2 w-[260px] hover:bg-spotify-green cursor-pointer hover:text-spotify-white duration-200 relative group/playlist">
                    <div class="h-5/6">
                        <img v-if="playlist.cover" :src="playlist.cover" alt="playlist image" class="w-full object-cover rounded h-full" />
                        <div v-else class="h-full w-full bg-spotify-green flex justify-center items-center rounded text-white text-5xl group-hover/playlist:bg-spotify-white group-hover/playlist:text-spotify-green duration-200">
                            <font-awesome-icon icon="fa-solid fa-record-vinyl" />
                        </div>
                    </div>
                    <div class="p-1">
                        <p>{{ playlist.name }}</p>
                        <p class="text-sm opacity-80">{{ playlist.user.name }}</p>
                    </div>
                    <inertia-link :href="route('playlist.show', playlist.id)" class="absolute top-0 left-0 w-full h-full" />
                </div>
            </div>
        </div>
    </app-layout>
</template>
