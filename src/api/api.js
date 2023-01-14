import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:4001'
})

export default http