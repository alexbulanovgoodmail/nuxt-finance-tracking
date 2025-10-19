<script setup lang="ts">
import type { AuthFormField } from '@nuxt/ui'

useHead({
	title: 'Вход'
})

const fields: AuthFormField[] = [
	{
		name: 'email',
		type: 'email',
		label: 'Email',
		size: 'xl',
		placeholder: 'Введите адрес электронной почты',
		required: true
	},
	{
		name: 'password',
		type: 'password',
		label: 'Пароль',
		size: 'xl',
		placeholder: 'Введите пароль',
		required: true
	}
]
</script>

<template>
	<UPageCard class="w-full max-w-md">
		<UAuthForm
			title="Вход"
			description="Чтобы войти, введите свой логин и пароль."
			icon="i-lucide-user"
			:fields="fields"
			:submit="{
				label: 'Войти',
				size: 'xl'
			}"
		>
			<template #footer>
				Еще не зарегистрированы?
				<ULink to="/auth/sign-up/" class="text-primary font-medium"
					>Регистрация</ULink
				>.
			</template>
		</UAuthForm>
	</UPageCard>
</template>
