<template>
	<button
		:type="type"
		v-bind="$attrs"
		class="button"
		:class="classes"
		@click="$emit('click')"
	>
		<slot name="title"></slot>
	</button>
</template>

<script setup>
defineProps({
	type: {
		type: String,
		default: 'button',
	},
	classes: {
		type: Array,
		default() {
			return []
		},
	},
})

defineEmits({
	click: null,
})
</script>

<style lang="scss" scoped>
.button {
	width: auto;
	color: #ffffff;
	background-color: #4ec2cf;
	border: 1px solid #4ec2cf;
	border-radius: 15px;
	padding: 0.5rem 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all ease-in-out 0.2s;
	&:hover {
		color: #000000;
		background-color: #ffffff;
	}
	&:disabled {
		opacity: 0.6;
		pointer-events: none;
	}
}
</style>
