<template>
	<div class="card">
		<figure class="card__poster">
			<img :src="item.Poster" loading="lazy" :alt="item.Title" />
		</figure>
		<div class="card__info">
			<p>Name: {{ item.Title }}</p>
			<p>Year: {{ item.Year }}</p>
			<p>imdbID: {{ item.imdbID }}</p>
			<p>Type: {{ item.Type }}</p>
		</div>
	</div>
</template>

<script setup>
defineProps({
	item: {
		type: Object,
		required: true,
	},
})
</script>

<style scoped lang="scss">
.card {
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 10px;

	&__poster {
		position: relative;
		background-color: #f6f6f9;
		overflow: hidden;
		border: 10px solid gray;
		padding-top: 100%;
		img {
			display: block;
			border: 2px solid #fff;
			width: calc(100% - 4px);
			height: calc(100% - 4px);
			position: absolute;
			top: 0;
			left: 0;
			touch-action: pan-y;
			-ms-touch-action: pan-y;
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-moz-user-select: none;
			user-select: none;
			aspect-ratio: 4 / 3;
		}
	}

	.card__info {
		display: flex;
		flex-direction: column;
		gap: 10px;
		flex-grow: 1;
		padding: 1rem;
	}
}
</style>
