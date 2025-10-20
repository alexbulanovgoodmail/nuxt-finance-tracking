<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()
const { t } = useI18n()

const currentAppearance = computed({
	get() {
		return t(`settings.appearance-${colorMode.value}`)
	},
	set(value: 'dark' | 'light') {
		colorMode.value = value
	}
})
const items = computed<DropdownMenuItem[][]>(() => [
	[
		{
			label: t('settings.appearance-light'),
			icon: 'i-lucide-sun',
			type: 'checkbox',
			checked: currentAppearance.value === 'light',
			onSelect(e: Event) {
				e.preventDefault()

				currentAppearance.value = 'light'
			}
		},
		{
			label: t('settings.appearance-dark'),
			icon: 'i-lucide-moon',
			type: 'checkbox',
			checked: currentAppearance.value === 'dark',
			onSelect(e: Event) {
				e.preventDefault()

				currentAppearance.value = 'dark'
			}
		}
	]
])
</script>

<template>
	<USelect
		v-model="currentAppearance"
		value-key="label"
		:items="items"
		class="w-32"
	/>
</template>
