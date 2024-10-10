const auth = credentials => {
	window.localStorage.setItem('user', JSON.stringify(credentials))
}

const getUser = () => {
	const user = window.localStorage.getItem('user')
	if (user) {
		return JSON.parse(user)
	}
	return null
}

export { auth, getUser }
