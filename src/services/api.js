import axios from 'axios'
import { API_URL } from './urls'

const axiosInstance = axios.create({
	baseURL: API_URL,
	params: {
		i: 'tt3896198',
		apikey: '8523cbb8',
	},
	headers: {
		'Content-Type': 'application/json',
	},
})

const api = axiosInstance

export { api }
