<script setup>
import { usePage } from '@inertiajs/inertia-vue3'
const props = defineProps({
    playlist: Object
})

const activeUser = usePage().props.value.auth.user
</script>

<template>
    <app-layout>
        <template #header>
            <div class="flex h-full gap-2 align-center">
                <div class="h-full" v-if="playlist.cover">
                        <img :src="playlist.cover" alt="album cover" class="h-[60px] object-contain rounded">
                </div>
                <div class="flex flex-col justify-center">
                    <p>{{ playlist.name }}</p>
                    <inertia-link :href="route('user.show', playlist.user.id)" class="text-sm opacity-80 hover:underline">
                        {{ playlist.user.name }}<span v-for="(collaborator, index) in playlist.collaborators" :key="index">, {{ collaborator.name }}</span>
                    </inertia-link>
                </div>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex gap-4 flex-wrap justify-center">
                <div v-for="(song, index) in playlist.songs" :key="index" class="bg-white overflow-hidden shadow-sm sm:rounded p-2 w-[400px] h-[110px] flex gap-2">
                    <div>
                        <img :src="song.cover ? song.cover : song.album.cover" alt="album cover" class="object-contain h-full rounded-lg" />
                    </div>
                    <div class="p-1 flex flex-col justify-center">
                        <p class="font-medium">{{ song.title }} <span v-if="song.album">- {{ song.album.title}}</span></p>
                        <p class="text-sm opacity-80">{{ song.artist.name }}</p>
                        <button v-if="activeUser.id == playlist.user_id" @click="$inertia.delete(route('playlist.remove-song', [playlist.id, song.id]))" class="flex text-sm bg-spotify-black text-white rounded w-fit px-2 mt-2 hover:bg-red-500 duration-150">Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>
