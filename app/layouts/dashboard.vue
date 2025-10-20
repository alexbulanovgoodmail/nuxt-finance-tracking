<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const links = computed(() => [
	[
		{
			label: t('navigation.home'),
			icon: 'i-lucide-house',
			to: localePath('/'),
			exact: true,
			onSelect: () => {}
		},
		{
			label: t('navigation.transactions'),
			icon: 'i-lucide-history',
			to: localePath('/transactions/'),
			exact: true,
			onSelect: () => {}
		}
	]
])
</script>

<template>
	<UDashboardGroup>
		<UDashboardSidebar :default-size="20">
			<template #header />
			<template #default>
				<UNavigationMenu :items="links" orientation="vertical" />
			</template>
			<template #footer>
				<UserMenu />
			</template>
		</UDashboardSidebar>

		<slot />
	</UDashboardGroup>
</template>
