import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_URL_SERVICIO,
    headers: {'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`}
})

export default clienteAxios;