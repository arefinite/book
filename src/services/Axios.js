import axios from 'axios'

const baseURL = 'http://localhost:4000/api/v1/books'

const API = axios.create({
    baseURL
})

export default API