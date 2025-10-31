import { fetch } from '~~/services/transactions/fetch'

export default defineEventHandler(async event => {
	try {
		return await fetch(event)
	} catch (errors: any) {
		throw createError({
			statusCode: 500,
			statusMessage: errors[0]?.message || 'Internal Server Error',
			fatal: true
		})
	}
})
