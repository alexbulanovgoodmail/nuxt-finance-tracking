<script setup lang="ts">
definePageMeta({
	layout: 'dashboard'
})

const { t } = useI18n()

useHead({
	title: t('navigation.transactions')
})
</script>

<template>
	<UDashboardPanel id="transactions">
		<template #header>
			<UDashboardNavbar :title="t('navigation.transactions')" />
		</template>

		<template #body> Тут будут все транзакции </template>
	</UDashboardPanel>
</template>
