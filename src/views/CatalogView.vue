<template>
	<div class="catalog">
		<div class="catalog__search-result" v-if="!isLoading">
			{{ catalogInfo.searchInfo }}
		</div>
		<template v-if="!isLoading">
			<FilmsList :items="catalogStore.getItems" />
		</template>
		<template v-else>
			<div class="catalog__loading">Loading...</div>
		</template>
		<BasePagination
			v-if="!isLoading && catalogInfo.pages > 1"
			:page="catalogInfo.page"
			:pages="catalogInfo.pages"
			:max-visible-buttons="5"
			@change-page="setPage"
		/>
	</div>
</template>

<script setup>
import BasePagination from '@/components/common/BasePagination.vue'
import FilmsList from '@/components/films/FilmsList.vue'
import { useCatalogStore } from '@/stores/catalogStore'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
	page: {
		type: Number,
		default: 1,
	},
	searchValue: {
		type: String,
		default: '',
	},
})

const catalogStore = useCatalogStore()
const route = useRoute()
const router = useRouter()

const catalogInfo = computed(() => {
	const info = catalogStore.getCatalogInfo
	return {
		page: info.page,
		pages: info.pages,
		searchInfo: `You searched for: ${
			info.searchValue.length ? info.searchValue + ',' : ''
		} ${info.totalResults} results found`,
	}
})

const isLoading = ref(true)

const setPage = page => {
	router.push({
		name: route.name,
		query: {
			...route.query,
			page,
		},
	})
}

const setParams = () => {
	catalogStore.setParams(props)
}

const loadItems = async () => {
	await catalogStore.loadItems()
}

const initCatalog = async () => {
	isLoading.value = true
	setParams()
	await loadItems()
	isLoading.value = false
}

watch(props, initCatalog, { immediate: true })
</script>

<style scoped lang="scss">
.catalog {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	&__search-result {
		font-size: 18px;
		font-weight: bold;

		@media (min-width: 768px) {
			font-size: 24px;
		}
	}
	&__loading {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		font-weight: bold;
	}
}
</style>
