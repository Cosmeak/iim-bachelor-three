<script setup>
defineProps({
    users: Array
})
</script>

<template>
    <app-layout>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex gap-4 flex-wrap justify-center">
                <div v-for="(user, index) in users" :key="index" class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-2 w-[260px]  cursor-pointer duration-200 relative flex gap-2 group/artist hover:text-spotify-white hover:bg-spotify-green">
                    <div class="bg-spotify-green rounded px-2 py-1 text-white group-hover/artist:bg-spotify-white group-hover/artist:text-spotify-green">
                        <font-awesome-icon icon="fa-solid fa-user" />
                    </div>
                    <div class="p-1">
                        <p class="font-medium">{{ user.name }}</p>
                    </div>
                    <inertia-link :href="route('user.show', user.id)" class="absolute top-0 left-0 w-full h-full" />
                </div>
            </div>
        </div>
    </app-layout>
</template>
