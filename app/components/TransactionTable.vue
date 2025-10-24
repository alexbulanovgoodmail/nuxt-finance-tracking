<script setup lang="ts">
import type { TableColumn, DropdownMenuItem } from '@nuxt/ui'
import type { Transaction } from '~~/types'

// interface Props {
// 	transactions: Transaction[]
// }

// defineProps<Props>()

const { t } = useI18n()

const transactions = ref<Transaction[]>([
	{
		id: '11',
		title: 'Зарплата',
		category: 'Категория',
		date: new Date().toISOString(),
		amount: 85000
	}
])

const columns: TableColumn<Transaction>[] = [
	{
		accessorKey: 'title',
		header: t('table.title'),
		cell: ({ row }) => `${row.getValue('title')}`
	},
	{
		accessorKey: 'category',
		header: t('table.category'),
		cell: ({ row }) => `${row.getValue('category')}`
	},
	{
		accessorKey: 'date',
		header: t('table.date'),
		cell: ({ row }) => {
			return new Date(row.getValue('date')).toLocaleString('ru-RU', {
				day: 'numeric',
				month: 'short',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			})
		}
	},
	{
		accessorKey: 'amount',
		header: t('table.amount'),
		cell: ({ row }) => {
			const amount = Number.parseFloat(row.getValue('amount'))

			const formatted = new Intl.NumberFormat('ru-RU', {
				style: 'currency',
				currency: 'RUB'
			}).format(amount)

			return h('div', { class: 'font-medium' }, formatted)
		}
	},
	{
		id: 'action',
		header: () => h('div', { class: 'text-right' })
	}
]

function getDropdownActions(transaction: Transaction): DropdownMenuItem[][] {
	return [
		[
			{
				label: t('table.action-edit'),
				icon: 'i-lucide-edit',
				onSelect: () => {
					console.log('Edit > ', transaction.id)
				}
			},
			{
				label: t('table.action-delete'),
				icon: 'i-lucide-trash',
				color: 'error',
				onSelect: () => {
					console.log('Delete > ', transaction.id)
				}
			}
		]
	]
}
</script>

<template>
	<UTable :data="transactions" :columns="columns" class="shrink-0">
		<template #empty> {{ t('table.no-data') }} </template>
		<template #action-cell="{ row }">
			<UDropdownMenu :items="getDropdownActions(row.original)">
				<UButton
					icon="i-lucide-ellipsis-vertical"
					color="neutral"
					variant="ghost"
					aria-label="Actions"
				/>
			</UDropdownMenu>
		</template>
	</UTable>
</template>
