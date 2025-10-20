<script setup lang="ts">
definePageMeta({
	layout: 'dashboard'
})

const { t } = useI18n()
</script>

<template>
	<UPageCard>
		<div class="flex flex-col gap-y-4">
			<div class="flex items-center gap-x-4">
				<p class="">{{ t('settings.language') }}:&nbsp;</p>
				<LocaleSelect />
			</div>
			<div class="flex items-center gap-x-4">
				<p class="">{{ t('settings.appearance') }}:&nbsp;</p>
				<AppearanceSelect />
			</div>
		</div>
	</UPageCard>
</template>
