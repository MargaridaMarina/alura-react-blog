import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:4001'
})

export default http

// export const busca = async(url, setDado) => {
//   console.log(url)
//   const resposta = await api.get(url)

//   console.log({resposta})
//   setDado(resposta.data)
// }