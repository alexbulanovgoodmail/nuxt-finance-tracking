<script setup lang="ts">
interface Props {
	title: string
	amount: number
	lastAmount: number
	color: 'success' | 'error'
	loading?: boolean
}

const { amount, lastAmount } = defineProps<Props>()
const { currency } = useCurrency(amount)
const trendingUp = computed<boolean>(() => amount >= lastAmount)
const trendIcon = computed<string>(() =>
	trendingUp.value ? 'i-lucide-trending-up' : 'i-lucide-trending-down'
)
const percentageTrend = computed<string>(() => {
	if (amount === 0 || lastAmount === 0) return '♾️'

	const bigger = Math.max(amount, lastAmount)
	const lower = Math.min(amount, lastAmount)

	const ration = ((bigger - lower) / lower) * 100

	return `${Math.ceil(ration)}%`
})
</script>

<template>
	<UPageCard
		variant="subtle"
		:title="loading ? undefined : title"
		:icon="loading ? undefined : trendIcon"
		:ui="{
			container: `gap-y-1.5 sm:${loading ? 'p-0' : ''}`,
			wrapper: 'items-start',
			leading: `p-2.5 rounded-full bg-${trendingUp ? 'success' : 'error'}/10 ring ring-inset ring-${trendingUp ? 'success' : 'error'}/25`,
			leadingIcon: `text-${trendingUp ? 'success' : 'error'}`,
			title: 'font-normal text-muted text-xs uppercase'
		}"
		class="lg:rounded-none first:rounded-l-lg last:rounded-r-lg hover:z-1"
	>
		<div class="flex flex-col items-start gap-2">
			<template v-if="loading">
				<USkeleton class="h-48 w-full" />
			</template>
			<template v-else>
				<span class="text-2xl font-semibold text-highlighted">
					{{ currency }}
				</span>

				<UBadge
					:color="trendingUp ? 'success' : 'error'"
					variant="subtle"
					class="text-xs"
				>
					{{ percentageTrend }}
				</UBadge>
			</template>
		</div>
	</UPageCard>
</template>
