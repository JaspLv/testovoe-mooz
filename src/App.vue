<template>
	<div class="wrapper">
		<component :is="layout" v-if="layout">
			<router-view></router-view>
		</component>
	</div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import EmptyLayout from './layouts/EmptyLayout.vue'
import MainLayout from './layouts/MainLayout.vue'

const userStore = useUserStore()

const route = useRoute()

const layout = ref(null)

const changeLayout = layoutString => {
	const lookup = {
		MainLayout,
		EmptyLayout,
	}

	layout.value = markRaw(lookup[layoutString])
}

watch(() => {
	userStore.loadUser()
})

watch(route, () => {
	changeLayout(route.meta.layout + 'Layout')
})
</script>
