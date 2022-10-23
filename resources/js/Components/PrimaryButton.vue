<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="inline-flex items-center justify-center px-4 py-2 bg-spotify-green border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-spotify-black active:bg-spotify-green focus:outline-none focus:border-spotify-green focus:shadow-outline-gray transition ease-in-out duration-150 text-center">
        <slot />
    </button>
</template>
