<template>
	<ul class="pagination">
		<!-- Previous button -->
		<li
			class="pagination__button prev"
			:class="props.page > 1 ? '' : 'hidden'"
			@click.prevent="emit('changePage', Number(props.page - 1))"
		>
			<a href="#"> prev </a>
		</li>

		<!-- Item start -->
		<li
			v-if="isItemStart"
			class="pagination__page start"
			:class="{ active: props.page === 1 }"
			@click.prevent="emit('changePage', 1)"
		>
			<a href="#"> 1 </a>
		</li>

		<li v-if="isItemStartDots" class="pagination__dots">
			<a><span>...</span></a>
		</li>

		<!-- Visible items start -->

		<li class="pagination__page current active">
			<a href="#">
				{{ props.page }}
			</a>
		</li>
		<li
			v-for="p in range"
			:key="p"
			class="pagination__page range"
			:class="{ active: props.page === p }"
			@click.prevent="emit('changePage', p)"
		>
			<a href="#">
				{{ p }}
			</a>
		</li>

		<li v-if="isItemEndDots" class="pagination__dots">
			<a><span>...</span></a>
		</li>

		<!-- Item end -->
		<li
			v-if="isItemEnd"
			class="pagination__page last"
			:class="{ active: props.page === lastPage }"
			@click.prevent="emit('changePage', lastPage)"
		>
			<a href="#">
				{{ lastPage }}
			</a>
		</li>

		<!-- Next button -->
		<li
			class="pagination__button next"
			:class="props.page < props.pages ? '' : 'hidden'"
			@click.prevent="emit('changePage', Number(props.page + 1))"
		>
			<a href="#"> next </a>
		</li>
	</ul>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
	page: {
		type: Number,
		required: true,
	},
	pages: {
		type: Number,
		default: 1,
	},
	maxVisibleButtons: {
		type: Number,
		required: false,
		default: 3,
	},
})

// Emits
const emit = defineEmits({
	changePage: value => typeof value === 'number',
})

// Data

const range = computed(() => {
	if (props.pages <= props.maxVisibleButtons) {
		return props.pages
	}
	if (props.page + props.maxVisibleButtons > props.pages) {
		const arr = Array.from(Array(props.pages + 1).keys())
		return arr.slice(Math.max(arr.length - props.maxVisibleButtons, 0))
	}
	const visibleRange = []
	for (
		let i = props.page;
		i <= Math.min(props.page + props.maxVisibleButtons - 1, props.pages);
		i++
	) {
		visibleRange.push(i)
	}

	return visibleRange
})

const lastPage = computed(() => props.pages)

const isItemStart = computed(
	() =>
		Number(range.value[range.value.length - 1]) > 1 + props.maxVisibleButtons
)

const isItemStartDots = computed(
	() =>
		Number(range.value[range.value.length - 1]) > 1 + props.maxVisibleButtons
)

const isItemEndDots = computed(
	() => Number(range.value[range.value.length - 1]) + 1 <= lastPage.value - 1
)

const isItemEnd = computed(
	() => Number(range.value[range.value.length - 1]) < lastPage.value
)
</script>

<style lang="scss" scoped>
.pagination {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	&__button {
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		border-radius: 3px;
		cursor: pointer;
		transition: background-color 0.3s ease;
		&:hover {
			background-color: #ccc;
		}
		&.hidden {
			display: none;
		}
	}
	&__dots {
		display: none;
		@media (min-width: 768px) {
			display: block;
		}
	}
	&__page {
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		border-radius: 3px;
		cursor: pointer;
		transition: background-color 0.3s ease;
		&:hover {
			background-color: #ccc;
		}
		a {
			color: #333;
		}

		&.active {
			a {
				color: #4ec2cf;
			}
		}
		&.last,
		&.start,
		&.range {
			display: none;
			@media (min-width: 768px) {
				display: block;
			}
		}
		&.current {
			display: block;
			@media (min-width: 768px) {
				display: none;
			}
		}
	}
}

.hide {
	a {
		pointer-events: none;
	}
}

.active {
	a {
		color: #4ec2cf;
	}
}
</style>
