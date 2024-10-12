<template>
	<div class="login">
		<div class="login__content">
			<div class="login__title">Login</div>
			<form @submit.prevent="handleSubmit" class="login__form">
				<TextField
					name="username"
					label="Enter username"
					v-model="username"
					placeholder="Type your username"
				/>
				<BaseButton classes="login__button">
					<template #title> Login </template>
				</BaseButton>
			</form>
		</div>
	</div>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
import TextField from '@/components/common/TextField.vue'
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()

const router = useRouter()

const username = ref('')

const handleSubmit = () => {
	userStore.login({ username: username.value })
	router.push({ name: 'catalog' })
}
</script>

<style scoped lang="scss">
.login {
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	&__button {
		width: 100%;
		margin: 0 auto;
		@media (min-width: 1024px) {
			width: 35%;
		}
	}
	&__form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	&__title {
		font-size: 24px;
		text-align: center;
	}
	&__content {
		background-color: #eff2f4;
		border-radius: 15px;
		padding: 1rem;
		width: 90%;
		@media (min-width: 768px) {
			width: 50%;
		}
	}
}
</style>
