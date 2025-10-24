<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const { t } = useI18n()

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
</script>

<template>
	<UDropdownMenu :items="items">
		<UButton icon="i-lucide-plus" size="md" class="rounded-full" />
	</UDropdownMenu>
</template>
