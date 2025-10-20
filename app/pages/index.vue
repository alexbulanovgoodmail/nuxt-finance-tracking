<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import type { Period } from '~~/types'

definePageMeta({
	layout: 'dashboard'
})

const { t } = useI18n()

useHead({
	title: t('navigation.home')
})

const items = [
	[
		{
			label: t('transactions.new-income'),
			icon: 'i-lucide-arrow-big-right-dash'
		},
		{
			label: t('transactions.new-expense'),
			icon: 'i-lucide-arrow-big-left-dash'
		}
	]
] satisfies DropdownMenuItem[][]

const period = ref<Period>('monthly')
</script>

<template>
	<UDashboardPanel id="home">
		<template #header>
			<UDashboardNavbar :title="t('navigation.home')">
				<template #right>
					<UDropdownMenu :items="items">
						<UButton icon="i-lucide-plus" size="md" class="rounded-full" />
					</UDropdownMenu>
				</template>
			</UDashboardNavbar>
			<UDashboardToolbar>
				<template #left>
					<PeriodSelect v-model="period" />
				</template>
			</UDashboardToolbar>
		</template>

		<template #body> </template>
	</UDashboardPanel>
</template>
