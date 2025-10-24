export type Period = 'daily' | 'weekly' | 'monthly' | 'yearly'

export interface Range {
	start: Date
	end: Date
}

export interface Transaction {
	id: string | number
	title: string
	category: string
	date: string
	amount: number
}
