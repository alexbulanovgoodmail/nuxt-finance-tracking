import type { H3Event } from 'h3'
import type { Transaction } from '~~/types'
import { serverSupabaseClient } from '#supabase/server'

export async function fetch(event: H3Event) {
	const client = await serverSupabaseClient(event)

	const { data, error } = await client.from('Transactions').select('*')

	if (error) {
		throw error
	}

	return data as Transaction[]
}
