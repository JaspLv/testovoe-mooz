<template>
	<form @submit="handleSubmit">
		<TextField name="search" v-model="searchFiled" />
	</form>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TextField from './TextField.vue'

const searchFiled = ref('')
const router = useRouter()
const route = useRoute()

const handleSubmit = event => {
	event.preventDefault()
	router.push({
		name: route.name,
		query: {
			searchValue: searchFiled.value,
			page: 1,
		},
	})
}
</script>
