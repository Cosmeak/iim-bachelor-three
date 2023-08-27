<script setup>
import  { usePage } from "@inertiajs/inertia-vue3"

const props = defineProps({
    user: Object
})

const activeUser = usePage().props.value.auth.user
</script>

<template>
    <app-layout>
        <template #header>
            <h2 class="font-medium my-auto">{{ user.name }}</h2>
            <button v-if="!activeUser.friends.find(friend => friend.id == user.id) && user.id != activeUser.id" class="font-medium text-xs bg-spotify-green hover:bg-spotify-black duration-150 text-white px-2 py-1 rounded ml-2" @click="$inertia.post(route('friend.add', user.id))">Ajouter en ami</button>
        </template>

        <div class="py-12 h-full w-full">
            <div class="max-w-7xl h-full mx-auto sm:px-6 lg:px-8 flex gap-4 flex-wrap justify-center ">
                <h2 class="bg-spotify-green text-white overflow-hidden shadow-sm sm:rounded p-2 text-center text-xl mb-4 font-bold w-full">Playlist publique</h2>
                <div v-for="(playlist, index) in user.public_playlists" :key="index" class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2 w-[260px] h-[280px] hover:bg-spotify-green cursor-pointer hover:text-spotify-white duration-200 relative group/playlist ">
                    <div class="h-5/6">
                        <img v-if="playlist.cover" :src="playlist.cover" alt="playlist image" class="w-full object-cover rounded h-full" />
                        <div v-else class="h-full w-full bg-spotify-green flex justify-center items-center rounded text-white text-5xl group-hover/playlist:bg-spotify-white group-hover/playlist:text-spotify-green duration-200">
                            <font-awesome-icon icon="fa-solid fa-record-vinyl" />
                        </div>
                    </div>
                    <div class="p-1">
                        <p>{{ playlist.name }}</p>
                    </div>
                    <inertia-link :href="route('playlist.show', playlist.id)" class="absolute top-0 left-0 w-full h-full" />
                </div>

                <div v-for="(playlist, index) in user.collaborate_playlists" :key="index" class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2 w-[260px] h-[280px] hover:bg-spotify-green cursor-pointer hover:text-spotify-white duration-200 relative group/playlist ">
                    <div class="h-5/6">
                        <img v-if="playlist.cover" :src="playlist.cover" alt="playlist image" class="w-full object-cover rounded h-full" />
                        <div v-else class="h-full w-full bg-spotify-green flex justify-center items-center rounded text-white text-5xl group-hover/playlist:bg-spotify-white group-hover/playlist:text-spotify-green duration-200">
                            <font-awesome-icon icon="fa-solid fa-record-vinyl" />
                        </div>
                    </div>
                    <div class="p-1">
                        <p>{{ playlist.name }}</p>
                    </div>
                    <inertia-link :href="route('playlist.show', playlist.id)" class="absolute top-0 left-0 w-full h-full" />
                </div>
            </div>
        </div>
    </app-layout>
</template>
