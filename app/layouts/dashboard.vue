<script setup lang="ts">
const links = [
	[
		{
			label: 'Главная',
			icon: 'i-lucide-house',
			to: '/',
			exact: true,
			onSelect: () => {}
		},
		{
			label: 'Транзакции',
			icon: 'i-lucide-history',
			to: '/transactions/',
			exact: true,
			onSelect: () => {}
		}
	]
]
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
