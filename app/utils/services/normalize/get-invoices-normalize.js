import { INVOICE_STATUS } from '../../constants/service-data'

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
      status: INVOICE_STATUS[status] || ''
    }
  })
}
