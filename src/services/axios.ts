import axios from 'axios'

const axiosUrlBase = axios.create({
  baseURL: 'https://api.infosimples.com/api/v2/consultas/contas/cpfl',
})
const token = '9PlgVWtiqq6uvNYFFGL7mV0Lpzj_QnfJbMztjYUi'

axiosUrlBase.defaults.headers.common.token = token
export { axiosUrlBase }
