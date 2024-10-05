import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userStore } from '../../entities/user/store'

export const useParentWindow = () => {
	const navigate = useNavigate()

	const useEffect = useLayoutEffect(() => {
		const handleMessage = (event: Event) => {
			const { set: setUser } = userStore

			const { user, message, theme } = event.data
			const root = document.querySelector('#root')
			console.log(theme)
			if (message === 'init') {
				root?.classList?.add(theme)
				setUser(user)
				navigate('/')
			}
		}

		window.addEventListener('message', handleMessage)

		return () => {
			window.removeEventListener('message', handleMessage)
		}
	}, [])

	return useEffect
}
