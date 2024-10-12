<template>
	<form @submit="handleSubmit" class="catalog-search">
		<TextField
			name="search"
			v-model="searchField"
			placeholder="Type film name..."
		/>
	</form>
</template>

<script setup>
import TextField from '@/components/common/TextField.vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const searchField = ref('')

const router = useRouter()
const route = useRoute()

const handleSubmit = event => {
	event.preventDefault()
	router.push({
		name: route.name,
		query: {
			searchValue: searchField.value,
			page: 1,
		},
	})
}

watch(
	route,
	() => {
		searchField.value = route.query.searchValue || ''
	},
	{ immediate: true }
)
</script>

<style scoped lang="scss">
.catalog-search {
	flex-grow: 2;
}
</style>
