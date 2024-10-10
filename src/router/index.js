import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'catalog',
		component: () => import('@/views/CatalogView.vue'),
		meta: {
			layout: 'Main',
			requiresAuth: true,
			title: 'Movie catalog',
		},
		props: route => ({
			page: parseInt(route.query.page) || 1,
			searchValue: route.query.searchValue || '',
		}),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/LoginView.vue'),
		meta: {
			layout: 'Empty',
			requiresAuth: false,
			title: 'Login',
		},
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

router.beforeEach((to, from, next) => {
	const loggedIn = localStorage.getItem('user')
	const title = to.meta.title
	document.title = title
	if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
		next({ name: 'login' })
	} else {
		next()
	}
})

export default router
