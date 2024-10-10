<template>fdsfdsfs</template>

<script setup>
import { useCatalogStore } from '@/stores/catalogStore'
import { watch } from 'vue'

const catalogStore = useCatalogStore()

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

const setParams = () => {
	catalogStore.setParams(props)
}

const loadItems = () => {
	catalogStore.loadItems()
}

watch(
	props,
	() => {
		setParams()
		loadItems()
	},
	{ immediate: true }
)
</script>
