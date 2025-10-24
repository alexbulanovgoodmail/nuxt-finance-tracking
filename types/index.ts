export type Period = 'daily' | 'weekly' | 'monthly' | 'yearly'

export interface Range {
	start: Date
	end: Date
}

export interface Transaction {
	id: string | number
	created_at: string
	description: string
	category: string
	amount: number
}
