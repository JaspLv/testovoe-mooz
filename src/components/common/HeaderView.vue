<template>
	<header class="header">
		<PageTitle :title="$route.meta.title" />
		<CatalogSearch />
		<UserMenu />
	</header>
</template>

<script setup>
import CatalogSearch from '@/components/CatalogSearch.vue'
import UserMenu from '@/components/UserMenu.vue'
import PageTitle from './PageTitle.vue'
</script>

<style lang="scss">
.header {
	background-color: #4ec2cf;
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 14px;
	flex-wrap: wrap;
}
</style>
