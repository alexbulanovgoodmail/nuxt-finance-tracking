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

		<template #body>
			<UPageGrid class="lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-px">
				<TrendCard
					:title="t('transactions.income')"
					:amount="4000"
					:last-amount="3000"
					color="success"
					:loading="false"
				/>
				<TrendCard
					:title="t('transactions.income')"
					:amount="4000"
					:last-amount="13000"
					color="error"
					:loading="false"
				/>
				<TrendCard
					:title="t('transactions.investment')"
					:amount="4000"
					:last-amount="23000"
					color="success"
					:loading="false"
				/>
				<TrendCard
					:title="t('transactions.savings')"
					:amount="14000"
					:last-amount="3000"
					color="error"
					:loading="false"
				/>
			</UPageGrid>
		</template>
	</UDashboardPanel>
</template>
