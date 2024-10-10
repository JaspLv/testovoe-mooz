<template>
	<header class="header">
		<PageTitle :title="$route.meta.title" />
		<CatalogSearch />
		<UserMenu />
	</header>
</template>

<script setup>
import CatalogSearch from './CatalogSearch.vue'
import PageTitle from './PageTitle.vue'
import UserMenu from './UserMenu.vue'
</script>

<style lang="scss">
.header {
	background-color: #4ec2cf;
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
	gap: 14px;
	flex-wrap: wrap;
}
</style>
