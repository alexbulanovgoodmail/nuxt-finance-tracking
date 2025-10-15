<script setup lang="ts">
import type { AuthFormField } from '@nuxt/ui'

const fields: AuthFormField[] = [
	{
		name: 'name',
		type: 'text',
		label: 'Имя',
		size: 'xl',
		placeholder: 'Введите ваше имя',
		required: true
	},
	{
		name: 'email',
		type: 'email',
		label: 'Email',
		size: 'xl',
		placeholder: 'Введите ваш адрес электронной почты',
		required: true
	},
	{
		name: 'password',
		type: 'password',
		label: 'Пароль',
		size: 'xl',
		placeholder: 'Придумайте пароль',
		required: true
	}
]
</script>

<template>
	<UPageCard class="w-full max-w-md">
		<UAuthForm
			title="Регистрация"
			description="Чтобы зарегистрироваться, заполните форму."
			icon="i-lucide-user"
			:fields="fields"
			:submit="{
				label: 'Зарегистрироваться',
				size: 'xl'
			}"
		>
			<template #footer>
				Уже зарегистрированы?
				<ULink to="/auth/sign-in/" class="text-primary font-medium">Войти</ULink
				>.
			</template>
		</UAuthForm>
	</UPageCard>
</template>
