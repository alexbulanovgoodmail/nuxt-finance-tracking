<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

definePageMeta({
	layout: 'dashboard'
})

useHead({
	title: 'Главная'
})

const items = [
	[
		{
			label: 'Новый доход',
			icon: 'i-lucide-arrow-big-right-dash'
		},
		{
			label: 'Новый расход',
			icon: 'i-lucide-arrow-big-left-dash',
			to: '/customers'
		}
	]
] satisfies DropdownMenuItem[][]
</script>

<template>
	<UDashboardPanel id="home">
		<template #header>
			<UDashboardNavbar title="Главная">
				<template #right>
					<UDropdownMenu :items="items">
						<UButton
							icon="i-lucide-piggy-bank"
							size="md"
							class="rounded-full"
						/>
					</UDropdownMenu>
				</template>
			</UDashboardNavbar>
		</template>

		<template #body> </template>
	</UDashboardPanel>
</template>
