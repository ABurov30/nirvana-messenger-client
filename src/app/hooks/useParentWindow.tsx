//@ts-nocheck
import i18next from 'i18next'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userStore } from '../../entities/user/store'

export const useParentWindow = () => {
	const navigate = useNavigate()

	const useEffect = useLayoutEffect(() => {
		const handleMessage = (event: Event) => {
			const { set: setUser } = userStore

			const { user, message, theme, language } = event.data
			const root = document.querySelector('#root')

			if (message === 'init') {
				root?.classList?.add(theme)
				setUser(user)
				navigate('/')

				i18next.changeLanguage(language)
			}
		}

		window.addEventListener('message', handleMessage)

		return () => {
			window.removeEventListener('message', handleMessage)
		}
	}, [])

	return useEffect
}
