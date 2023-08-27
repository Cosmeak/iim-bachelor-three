<script setup>
import { computed } from 'vue';

const props = defineProps(['href', 'active']);

const classes = computed(() => props.active
    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-spotify-green text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-spotify-green transition  duration-150 ease-in-out'
    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-spotify-green/50 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
);
</script>

<template>
    <inertia-link :href="href" :class="classes">
        <slot />
    </inertia-link>
</template>
