<script setup>
useHead({
	title: '🚀 Cosmeak - Ship your project to space!',
});

const projects = ref();
const { find } = useStrapi();

const loadData = async () => {
	projects.value = await find('projects', { populate: 'deep' });
}

onMounted(() => {
	loadData();
})
</script>

<template>
	<!-- Hero section -->
	<div class="bg-gray-900 text-white py-20 -mt-8">
		<div class="container mx-auto px-4">
			<div class="flex flex-col md:flex-row items-center">
				<img src="~/assets/wizarding-world-portrait.png" alt="Photo de Profil"
					class="w-48 h-48 object-cover rounded-full border-4 border-white">
				<div class="md:ml-8 mt-8 md:mt-0">
					<h1 class="text-4xl font-semibold mb-2">Bonjour, je suis Guillaume FINE!</h1>
					<p class="text-xl">Je suis un développeur fullstack passionné par le developpement et l'apprentissage de
						nouvelles idées.</p>
					<p class="text-xl mt-2">Mais aussi un fan de RPG, de lecture et de toutes choses qui me permet de m'évader dans
						un nouveau monde est le bienvenue.</p>
					<p class="mt-4">Découvrez mes projets ci-dessous! Ou prenez contact à l'addresse <a href="mailto:guillaume.fine@cosmeak.dev" class="underline">guillaume.fine@cosmeak.dev</a>.</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Projects section -->
	<section class="py-16" id="projects">
		<div class="container mx-auto">
			<h2 class="text-3xl font-semibold mb-8">Mes projets</h2>
			<div class="grid gap-4 grid-cols-3">
				<Card v-for="project in projects?.data" :key="project.id" class="w-full">
					<template #header>{{ project.name }}</template>
					<template #body>{{ project.content.substring(0,100) + '...' }}</template>
					<template #footer><NuxtLink :to="'/projects/' + project.slug" class="bg-light text-secondary px-2 py-1 rounded hover:bg-secondary hover:text-light duration-200">En savoir plus</NuxtLink></template>
				</Card>
			</div>
		</div>
	</section>
</template>
