<template>
	<div class="user">{{ user.username }}</div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { computed } from 'vue'

const userStore = useUserStore()

const user = computed(() => {
	return userStore.getUser
})
</script>

<style scoped>
.user {
	color: #000000;
	font-size: 21px;
	font-weight: 500;
}
</style>
