import { api } from '../api'

const loadFilms = params => {
	return api
		.get('', { params })
		.then(response => {
			if (response.data.Response === 'False') {
				return { items: [], pages: 1 }
			}

			if (response.data.Search) {
				return {
					items: response.data.Search,
					totalResults: Number(response.data.totalResults),
				}
			}

			return { items: [response.data], pages: 1, totalResults: 1 }
		})
		.catch(error => {
			throw new Error(error.message)
		})
}

export { loadFilms }
