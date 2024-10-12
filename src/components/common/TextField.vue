<template>
	<div class="field">
		<label :for="name" v-show="label" class="field__label">{{ label }}</label>
		<input
			v-bind="$attrs"
			:id="name"
			:type="type"
			:value="modelValue"
			@input="handleInput($event)"
			class="field__input"
		/>
	</div>
</template>

<script setup>
defineProps({
	label: {
		type: String,
		default: null,
	},
	modelValue: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: 'text',
	},
	name: {
		type: String,
		required: true,
	},
})
const emit = defineEmits(['update:modelValue'])

const handleInput = event => {
	emit('update:modelValue', event.target.value)
}
</script>

<style scoped lang="scss">
.field {
	display: flex;
	flex-direction: column;
	gap: 6px;
	&__label {
		font-weight: bold;
		font-size: 16px;
	}
	&__input {
		padding: 0.5rem;
		border-radius: 8px;
		border: 1px solid #ffffff;
		transition: border ease 0.2s;
		&:focus-visible,
		&:focus,
		&:hover {
			border: 1px solid #4ec2cf;
		}
	}
}
</style>
