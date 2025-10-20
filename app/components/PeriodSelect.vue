<script setup lang="ts">
import type { Period } from '~~/types'

const { t } = useI18n()

const model = defineModel<Period>({ required: true })

const periods = ref<Period[]>(['daily', 'weekly', 'monthly', 'yearly'])

const localizedItems = computed(() =>
	periods.value.map(period => ({
		label: t(`period.${period}`),
		value: period
	}))
)
</script>

<template>
	<USelect
		v-model="model"
		:items="localizedItems"
		variant="ghost"
		:ui="{
			value: 'capitalize',
			itemLabel: 'capitalize',
			trailingIcon:
				'group-data-[state=open]:rotate-180 transition-transform duration-200'
		}"
		class="min-w-32"
	/>
</template>
