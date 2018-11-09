import axios from 'axios'

export default(name) => {
  return axios.create({
    baseURL: `http://localhost:8082`,
    proxy: {
        host: 'http://192.168.43.35',
        port: 8081,
      },
    params:{
        name:name
    }
})
}