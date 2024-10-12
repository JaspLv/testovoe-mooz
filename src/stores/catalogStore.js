import { loadFilms } from '@/services/api/catalogApi'
import { defineStore } from 'pinia'

export const useCatalogStore = defineStore('catalogStore', {
	state: () => ({
		items: [],
		searchValue: '',
		totalResults: 0,
		page: 1,
		pages: 1,
	}),

	getters: {
		getItems(store) {
			return store.items
		},
		getPages(store) {
			return store.pages
		},
		getCatalogInfo(store) {
			return {
				pages: store.pages,
				page: store.page,
				searchValue: store.searchValue || '',
				totalResults: store.totalResults || 0,
			}
		},
		getPage(store) {
			return store.page
		},
	},

	actions: {
		setParams(params) {
			this.searchValue = params.searchValue
			this.page = params.page
		},
		async loadItems() {
			const params = {
				s: this.searchValue,
				page: this.page,
			}
			try {
				const result = await loadFilms(params)
				const totalPages = Math.round(Number(result.totalResults) / 10)
				this.items = result.items
				this.pages = totalPages
				this.totalResults = Number(result.totalResults)
			} catch (error) {
				this.items = []
				this.pages = 0
				alert(JSON.stringify(error))
			}
		},
	},
})
