<template>
	<h1 class="page-title">
		{{ title }}
	</h1>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
})
</script>

<style scoped lang="scss">
.page-title {
	text-transform: uppercase;
	font-size: 24px;
	color: #000000;
	@media (min-width: 768px) {
		font-size: 28px;
	}
	@media (min-width: 1024px) {
		font-size: 36px;
	}
}
</style>
