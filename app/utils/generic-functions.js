import { LANGUAGES } from './constants'

export function formatNumberToCurrencyMXN (number) {
  if (typeof number !== 'number') {
    throw new TypeError('Input must be a number')
  }

  return new Intl.NumberFormat(LANGUAGES.ES, {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number)
}
