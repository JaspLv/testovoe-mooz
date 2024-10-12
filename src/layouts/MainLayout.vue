<template>
	<HeaderView />
	<main class="container">
		<slot></slot>
	</main>
</template>

<script setup>
import HeaderView from '@/components/common/HeaderView.vue'
</script>
