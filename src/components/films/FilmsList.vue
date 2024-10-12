<template>
	<template v-if="items?.length">
		<div class="films-list">
			<FilmCard v-for="film of items" :key="film.imdbID" :item="film" />
		</div>
	</template>
	<template v-else>
		<div class="films-list__no-result">
			No results found. Please try another search.
		</div>
	</template>
</template>

<script setup>
import FilmCard from './FilmCard.vue'
defineProps({
	items: {
		type: Array,
		required: true,
	},
})
</script>

<style scoped lang="scss">
.films-list {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	@media (min-width: 468px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	@media (min-width: 768px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	&__no-result {
	}
}
</style>
