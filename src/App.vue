<template>
	<div class="wrapper">
		<component :is="layout" v-if="layout">
			<router-view></router-view>
		</component>
	</div>
</template>

<script setup>
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import EmptyLayout from './layouts/EmptyLayout.vue'
import MainLayout from './layouts/MainLayout.vue'

const route = useRoute()

const layout = ref(null)

const changeLayout = layoutString => {
	const lookup = {
		MainLayout,
		EmptyLayout,
	}

	layout.value = markRaw(lookup[layoutString])
}

watch(route, () => {
	console.log('TESTS')
	changeLayout(route.meta.layout + 'Layout')
})
</script>
