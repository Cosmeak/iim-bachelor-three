<script setup lang="ts">
const { findOne } = useStrapi();
const slug = useRoute().params.slug;
const project = ref();
const previousProject = ref();
const nextProject = ref();

onMounted(async () => {
	project.value = await findOne(`projects?filters[slug]=${slug}&populate=deep`);
	project.value = project.value.data[0];

	defineHead();

	previousProject.value = await findOne(`projects`, project.value.id - 1);
	nextProject.value = await findOne(`projects`, project.value.id + 1);
	console.table(previousProject.value.data.id)
	console.table(nextProject.value.data.id)
});

function defineHead() {
	useHead({
		title: 'Cosmeak - ' + project.value.name,
	});
}
</script>

<template>
	<div class="container mx-auto">
		<div class="flex justify-between mb-8 relative">
			<NuxtLink class="bg-white px-2 py-1 rounded shadow text-secondary hover:bg-secondary hover:text-light duration-200" v-if="previousProject?.data.id" :to="'/projects/' + previousProject.data.slug">Previous</NuxtLink>
			<NuxtLink to="/#projects" class="bg-white px-2 py-1 rounded shadow hover:text-light hover:bg-dark duration-200">Retour à l'accueil</NuxtLink>
			<NuxtLink class="bg-white px-2 py-1 rounded shadow text-secondary hover:bg-secondary hover:text-light duration-200" v-if="nextProject?.data.id" :to="'/projects/' + nextProject.data.slug">Next</NuxtLink>	
		</div>
		<Card>
			<template #body>
				<div class="w-full h-[250px] relative rounded overflow-hidden mt-2" :class="[project?.thumbnail?.url ? 'text-secondary' : 'bg-secondary-lighten text-dark']">
					<h1 class="text-5xl text-center drop-shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{{ project?.name }}</h1>
					<img :src="project?.thumbnail?.url" alt="" class="object-cover h-full w-full" v-if="project?.thumbnail?.url">
				</div>

				<div class="mt-2" v-html="project?.content"></div>

				<div v-if="project?.source_code_link || project?.deployed_link" class="text-sm mt-8 flex gap-4">
					<a v-if="project?.source_code_link" :href="project.source_code_link" class="bg-dark text-light px-2 py-1 rounded hover:bg-secondary duration-200">Code source</a>
					<a v-if="project?.deployed_link" :href="project.deployed_link" class="bg-dark text-light px-2 py-1 rounded hover:bg-secondary duration-200">Projet en ligne</a>
				</div>
			</template>
		</Card>
	
		<div class="flex gap-2 mt-4">
			<p class="my-auto">Tags:</p>
			<span class="p-1 border-secondary border text-secondary text-sm rounded flex" v-for="(techno, index) in project?.technologies" :key="index">
				<img :src="techno?.logo.url" alt="" class="h-4 w-4 mr-1 my-auto object-contain">
				{{ techno?.name }}
			</span>
		</div>
	</div>
</template>