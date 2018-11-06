import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`,
    proxy: {
        host: 'http://192.168.43.35',
        port: 8081,
      },
    params:{
        email:"kishoreas7298@gmail.com",
        password:"1234"
    }
})
}