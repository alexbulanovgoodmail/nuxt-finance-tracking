export type Period = 'daily' | 'weekly' | 'monthly' | 'yearly'

export interface Range {
	start: Date
	end: Date
}

export enum Type {
	INCOME = 'Income',
	SAVINGS = 'Savings',
	EXPENSES = 'Expenses',
	INVESTMENT = 'Investment'
}

export interface Transaction {
	id: string | number
	created_at: string
	description: string
	category: string
	type: Type
	amount: number
}
