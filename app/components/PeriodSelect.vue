<script setup lang="ts">
import type { Period, Range } from '~~/types'
import { eachDayOfInterval } from 'date-fns'

const { t } = useI18n()

const model = defineModel<Period>({ required: true })
const props = defineProps<{
	range: Range
}>()

const days = computed(() => eachDayOfInterval(props.range))

const periods = computed<Period[]>(() => {
	if (days.value.length <= 8) {
		return ['daily']
	}

	if (days.value.length <= 31) {
		return ['daily', 'weekly']
	}

	return ['weekly', 'monthly']
})

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
	/>
</template>
