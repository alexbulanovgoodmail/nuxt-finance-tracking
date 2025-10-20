<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

definePageMeta({
	layout: 'dashboard'
})

const { t } = useI18n()
const localePath = useLocalePath()

useHead({
	title: t('navigation.settings')
})

const links = [
	[
		{
			label: t('navigation.settings-general'),
			icon: 'i-lucide-tool-case',
			to: localePath('/settings/'),
			exact: true
		},
		{
			label: t('navigation.settings-profile'),
			icon: 'i-lucide-user',
			to: localePath('/settings/profile'),
			exact: true
		}
	]
] satisfies NavigationMenuItem[][]
</script>

<template>
	<UDashboardPanel id="settings">
		<template #header>
			<UDashboardNavbar :title="t('navigation.settings')" />

			<UDashboardToolbar>
				<UNavigationMenu :items="links" highlight class="-mx-1 flex-1" />
			</UDashboardToolbar>
		</template>

		<template #body>
			<NuxtPage />
		</template>
	</UDashboardPanel>
</template>
