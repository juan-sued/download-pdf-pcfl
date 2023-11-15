import axios from 'axios'

const axiosI = axios.create({
  baseURL: 'https://',
})

export { axiosI }
