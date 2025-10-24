<script setup lang="ts">
import type { Period } from '~~/types'

definePageMeta({
	layout: 'dashboard'
})

const { t } = useI18n()

useHead({
	title: t('navigation.home')
})

const period = ref<Period>('monthly')
</script>

<template>
	<UDashboardPanel id="home">
		<template #header>
			<UDashboardNavbar :title="t('navigation.home')">
				<template #right>
					<TransactionAdd />
				</template>
			</UDashboardNavbar>
			<UDashboardToolbar>
				<template #left>
					<PeriodSelect v-model="period" />
				</template>
			</UDashboardToolbar>
		</template>

		<template #body>
			<!-- тренды -->
			<TransactionTrends />
			<!-- таблица -->
			<TransactionTable />
		</template>
	</UDashboardPanel>
</template>
