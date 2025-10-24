<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
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
