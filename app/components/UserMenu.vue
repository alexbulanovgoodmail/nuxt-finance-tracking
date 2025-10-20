<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { useColorMode } from '@vueuse/core'

const { t } = useI18n()
const colorMode = useColorMode()
const localePath = useLocalePath()

const user = ref({
	name: 'Alexander Bulanov',
	avatar: {
		src: 'https://avatars.githubusercontent.com/u/227379691?v=4',
		alt: 'Alexander Bulanov'
	}
})

const items = computed<DropdownMenuItem[][]>(() => [
	[
		{
			type: 'label',
			label: user.value.name,
			avatar: user.value.avatar
		}
	],
	[
		{
			label: t('navigation.profile'),
			icon: 'i-lucide-user',
			to: localePath('/settings/profile/'),
			exact: true
		},
		{
			label: t('navigation.settings'),
			icon: 'i-lucide-settings',
			to: localePath('/settings/'),
			exact: true
		}
	],
	[
		{
			label: t('settings.appearance'),
			icon: 'i-lucide-sun-moon',
			children: [
				{
					label: t('settings.appearance-light'),
					icon: 'i-lucide-sun',
					type: 'checkbox',
					checked: colorMode.value === 'light',
					onSelect(e: Event) {
						e.preventDefault()

						colorMode.value = 'light'
					}
				},
				{
					label: t('settings.appearance-dark'),
					icon: 'i-lucide-moon',
					type: 'checkbox',
					checked: colorMode.value === 'dark',
					onUpdateChecked(checked: boolean) {
						if (checked) {
							colorMode.value = 'dark'
						}
					},
					onSelect(e: Event) {
						e.preventDefault()
					}
				}
			]
		}
	],
	[
		{
			label: t('navigation.logout'),
			icon: 'i-lucide-log-out'
		}
	]
])
</script>

<template>
	<UDropdownMenu
		:items="items"
		:content="{ align: 'center', collisionPadding: 12 }"
	>
		<UButton
			v-bind="{
				...user,
				label: user?.name,
				trailingIcon: 'i-lucide-chevrons-up-down'
			}"
			color="neutral"
			variant="ghost"
			block
		/>
	</UDropdownMenu>
</template>
