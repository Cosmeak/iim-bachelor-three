<script setup>
import { useForm } from "@inertiajs/inertia-vue3"
import InputLabel from '@/Components/InputLabel.vue'
import TextInput from '@/Components/TextInput.vue'
import InputError from '@/Components/InputError.vue'

const form = useForm({
    name: '',
    description: '',
    cover: '',
    private: true
})

const submit = () => {
    form.post(route('playlist.store'))
}
</script>

<template>
    <app-layout>
        <template #header>
            <h2 class="font-medium">Création d'une playlist</h2>
        </template>

        <div class="py-12">
            <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-4 bg-white border-b border-gray-200">
                        <form @submit.prevent="submit()" class="flex flex-col gap-4">
                            <div>
                                <InputLabel for="name" value="Titre" />
                                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus />
                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>

                            <div>
                                <InputLabel for="description" value="Description" />
                                <TextInput id="description" type="text" class="mt-1 block w-full" v-model="form.description" autofocus />
                                <InputError class="mt-2" :message="form.errors.description" />
                            </div>

                            <div>
                                <InputLabel for="cover" value="Image de couverture" />
                                <TextInput id="cover" type="url" class="mt-1 block w-full" v-model="form.cover" autofocus />
                                <InputError class="mt-2" :message="form.errors.cover" />
                            </div>

                            <div>
                                <InputLabel for="private" value="Visibilité" />
                                <select id="private" v-model="form.private" class="mt-1 block w-full border-gray-300 focus:border-spotify-green focus:ring focus:ring-spotify-green focus:ring-opacity-50 rounded-md shadow-sm" required>
                                    <option :value="true">Privé</option>
                                    <option :value="false">Public</option>
                                </select>
                                <InputError class="mt-2" :message="form.errors.cover" />
                            </div>

                            <div>
                                <button type="submit" class="block w-full rounded mt-4 text-center bg-spotify-green py-1 text-white text-lg font-medium">Créer la playlist</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>
