<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

defineProps({
    songs: Array
})

const getPlaylists = async () => {
    let res = await axios.get(route('playlist.get-my-playlists'))
    return res.data.playlists
}

const closeOnEscape = (e) => {
    if (open.value && e.key === 'Escape') {
        open.value = false;
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

const openModal = ref(false)
</script>

<template>
    <app-layout>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex gap-4 flex-wrap justify-center">
                <div v-for="(song, index) in songs" :key="index" class="bg-white overflow-hidden shadow-sm sm:rounded p-2 w-[400px] h-[100px] flex gap-2">
                    <div>
                        <img :src="song.cover ? song.cover : song.album.cover" alt="album cover" class="object-contain h-full rounded-lg" />
                    </div>
                    <div class="p-1 flex flex-col justify-center">
                        <p class="font-medium">{{ song.title }}</p>
                        <p class="text-sm opacity-80">{{ song.artist.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>
