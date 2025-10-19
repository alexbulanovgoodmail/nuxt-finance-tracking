<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

definePageMeta({
	layout: 'dashboard'
})

useHead({
	title: 'Настройки'
})

const links = [
	[
		{
			label: 'Основые',
			icon: 'i-lucide-tool-case',
			to: '/settings/',
			exact: true
		},
		{
			label: 'Профиль',
			icon: 'i-lucide-user',
			to: '/settings/profile',
			exact: true
		}
	]
] satisfies NavigationMenuItem[][]
</script>

<template>
	<UDashboardPanel id="settings">
		<template #header>
			<UDashboardNavbar title="Настройки" />

			<UDashboardToolbar>
				<UNavigationMenu :items="links" highlight class="-mx-1 flex-1" />
			</UDashboardToolbar>
		</template>

		<template #body>
			<NuxtPage />
		</template>
	</UDashboardPanel>
</template>
