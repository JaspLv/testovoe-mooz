import { auth, getUser } from '@/services/api/useApi'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
	state: () => ({
		user: null,
	}),

	getters: {
		isLogined(store) {
			return !!store.user
		},

		getUser(store) {
			return store.user
		},
	},

	actions: {
		setUser(user) {
			this.user = user
		},
		login(credentials) {
			auth(credentials)
			this.setUser(credentials)
		},
		loadUser() {
			const user = getUser()
			if (user) {
				this.setUser(user)
			}
		},
	},
})
