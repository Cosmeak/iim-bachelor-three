<scripts setup>

</scripts>

<template>
    <div class="w-100 h-screen text-spotify-white bg-black">
        <div class="flex pb-9">
            <nav class="p-4 w-56 h-screen bg-black">
                <ul class="flex flex-col gap-2">
                    <li>
                        <inertia-link class="font-bold bg-spotify-white/10 p-2 rounded-lg w-full text-sm block hover:bg-spotify-white hover:text-black duration-200">
                            <font-awesome-icon icon="fa-solid fa-house my-auto" /> <span class="ml-2 my-auto">Accueil</span>
                        </inertia-link>
                    </li>

                    <li>
                        <inertia-link class="font-bold bg-spotify-white/10 p-2 rounded-lg w-full text-sm block hover:bg-spotify-white hover:text-black duration-200">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass my-auto" /> <span class="ml-2 my-auto">Rechercher</span>
                        </inertia-link>
                    </li>

                    <li>
                        <inertia-link class="font-bold bg-spotify-white/10 p-2 rounded-lg w-full text-sm block hover:bg-spotify-white hover:text-black duration-200">
                            <font-awesome-icon icon="fa-solid fa-book my-auto" /> <span class="ml-2 my-auto">Bibliothèque</span>
                        </inertia-link>
                    </li>
                </ul>
            </nav>

            <main class="p-4 pt-12 w-full bg-spotify-white/10">
                <slot name="content" />
            </main>
        </div>

        <div class="py-6 px-4 bottom-0 fixed w-screen bg-spotify-black border-t border-spotify-white/40 text-md">

        </div>
    </div>
</template>
