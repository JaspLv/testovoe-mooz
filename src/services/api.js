import axios from 'axios'
import { API_URL } from './urls'

const axiosInstance = axios.create({
	baseURL: API_URL,
	params: {
		i: import.meta.env.VITE_API_I,
		apikey: import.meta.env.VITE_API_KEY,
	},
	headers: {
		'Content-Type': 'application/json',
	},
})

const api = axiosInstance

export { api }
