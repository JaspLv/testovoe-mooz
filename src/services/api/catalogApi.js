import { api } from '../api'

const loadFilms = params => {
	return api
		.get('', { params })
		.then(response => {
			if (response.data.Error === 'Movie not found!') {
				return { items: [], pages: 1 }
			}
			return { items: response.data.Search, pages: response.data.totalResults }
		})
		.catch(error => {
			throw new Error(error.message)
		})
}

export { loadFilms }
