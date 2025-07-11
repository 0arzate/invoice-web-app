import { INVOICE_STATUS, INVOICE_STATUS_CLASS } from '../../constants/service-data'

export function getInvoicesNormalize (serviceResponse) {
  if (!serviceResponse || !serviceResponse.data || !serviceResponse.data.length) {
    throw new Error()
  }

  const { data } = serviceResponse

  return data.map((invoice) => {
    const status = invoice?.status || ''

    return {
      id: invoice.id,
      date: invoice.date,
      receiver: invoice?.receiver?.name,
      status: INVOICE_STATUS[status] || '',
      statusClass: INVOICE_STATUS_CLASS[status] || '',
      amount: invoice?.amount || 0
    }
  })
}
