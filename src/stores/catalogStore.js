import { loadFilms } from '@/services/api/catalogApi'
import { defineStore } from 'pinia'

export const useCatalogStore = defineStore('catalogStore', {
	state: () => ({
		items: [],
		searchValue: '',
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
				this.items = result.items
				this.pages = result.pages
			} catch (error) {
				this.items = []
				this.pages = 0
				alert(JSON.stringify(error))
			}
		},
	},
})
