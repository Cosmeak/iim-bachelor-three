<template>
	<div class="bg-white shadow text-dark rounded overflow-auto flex flex-col">
		<div class="bg-gray-900 text-light p-2 text-xl" v-if="$slots.header">
			<slot name="header" />
		</div>

		<div class="px-4 py-2">
			<slot name="body" />
		</div>

		<div v-if="$slots.footer" class="p-2 bg-gray-50 text-gray-500 text-sm w-full mt-auto" >
			<slot name="footer" />
		</div>
	</div>
</template>