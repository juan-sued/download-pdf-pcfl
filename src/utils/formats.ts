function formatDateBrazil(oldDate: string) {
  const dataPagamento = new Date(oldDate)
  const dia = String(dataPagamento.getDate()).padStart(2, '0')
  const mes = String(dataPagamento.getMonth() + 1).padStart(2, '0')
  const ano = dataPagamento.getFullYear()

  return `${dia}/${mes}/${ano}`
}

function formatDateWithMonth(date: string): string {
  const nomesMeses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]

  const dataMesReferencia = new Date(date + '/01')
  const mesFormatado = nomesMeses[dataMesReferencia.getMonth()]
  const anoFormatado = dataMesReferencia.getFullYear()

  return `${mesFormatado}/${anoFormatado}`
}
const formatUtils = { formatDateBrazil, formatDateWithMonth }

export default formatUtils
