export function formatCurrency(
	value: number | string,
	currency: 'RUB' | 'USD' | 'EUR' = 'RUB',
	locale: string = 'ru-RU',
	options: Intl.NumberFormatOptions = {}
): string {
	const number =
		typeof value === 'string'
			? parseFloat(value.replace(/\s/g, '').replace(',', '.'))
			: value

	if (!Number.isFinite(number)) return ''

	// Подбираем локаль автоматически, если не указана явно
	const currencyLocale =
		locale ||
		(currency === 'USD' ? 'en-US' : currency === 'EUR' ? 'de-DE' : 'ru-RU')

	return new Intl.NumberFormat(currencyLocale, {
		style: 'currency',
		currency,
		...options
	}).format(number)
}
