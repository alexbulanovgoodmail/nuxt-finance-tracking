<script setup lang="ts">
import type { Period, Transaction } from '~~/types'

definePageMeta({
	layout: 'dashboard'
})

const { t } = useI18n()

useHead({
	title: t('navigation.home')
})

const period = ref<Period>('monthly')

const transactions = ref<Transaction[]>([])

const headers = useRequestHeaders()
const { data, error } = await useFetch('/api/transactions/', {
	headers
})

if (error.value) {
	showError({
		statusCode: error.value.statusCode,
		statusMessage: error.value.message || 'Internal Server Error'
	})
}

if (data.value) {
	transactions.value = data.value
}
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
			<template v-if="data">
				<!-- тренды -->
				<TransactionTrends />
				<!-- таблица -->
				<TransactionTable :transactions="transactions" />
			</template>
		</template>
	</UDashboardPanel>
</template>
