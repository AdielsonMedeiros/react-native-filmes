import axios from 'axios'


const api = axios.create({
    baseURL:'http://sujeitoprogramador.com/'
})

export default api;

//http://sujeitoprogramador.com/r-api/?api=filmes