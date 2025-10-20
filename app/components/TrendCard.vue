<script setup lang="ts">
interface Props {
	title: string
	icon: string
	amount: number
	lastAmount: number
	color: 'success' | 'error'
	loading?: boolean
}

defineProps<Props>()
</script>

<template>
	<UPageCard
		variant="subtle"
		:title="loading ? undefined : title"
		:icon="loading ? undefined : icon"
		:ui="{
			container: `gap-y-1.5 sm:${loading ? 'p-0' : ''}`,
			wrapper: 'items-start',
			leading: `p-2.5 rounded-full bg-${color}/10 ring ring-inset ring-${color}/25`,
			leadingIcon: `text-${color}`,
			title: 'font-normal text-muted text-xs uppercase'
		}"
		class="lg:rounded-none first:rounded-l-lg last:rounded-r-lg hover:z-1"
	>
		<div class="flex items-center gap-2">
			<template v-if="loading">
				<USkeleton class="h-48 w-full" />
			</template>
			<template v-else>
				<span class="text-2xl font-semibold text-highlighted">
					{{ amount }} $
				</span>

				<UBadge :color="color" variant="subtle" class="text-xs">
					+ {{ 10 }}%
				</UBadge>
			</template>
		</div>
	</UPageCard>
</template>
