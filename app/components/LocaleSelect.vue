<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const currentLocale = computed({
	get() {
		return locale.value
	},
	set(newValue) {
		setLocale(newValue)
	}
})
</script>

<template>
	<ULocaleSelect
		v-model="currentLocale"
		:locales="locales as any[]"
		class="min-w-32"
	/>
</template>
