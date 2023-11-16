import axios from 'axios'

const axiosUrlBase = axios.create({
  baseURL: 'https://servicosonline.cpfl.com.br/agencia-webapp/api',
})

export { axiosUrlBase }
