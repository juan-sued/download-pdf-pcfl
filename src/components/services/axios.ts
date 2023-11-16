import axios from 'axios'

const axiosI = axios.create({
  baseURL: 'https://servicosonline.cpfl.com.br/agencia-webapi/api',
})

export { axiosI }
