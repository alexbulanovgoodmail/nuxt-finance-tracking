<script setup lang="ts">
definePageMeta({
	layout: 'dashboard'
})
</script>

<template>
	<UDashboardPanel id="home">
		<template #header>
			<UDashboardNavbar title="Транзакции" />
		</template>

		<template #body> Тут будут все транзакции </template>
	</UDashboardPanel>
</template>
