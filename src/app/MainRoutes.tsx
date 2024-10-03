import { useLayoutEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AuthPage from '../pages/AuthPage/AuthPage'
import MessengerPage from '../pages/MessengerPage/MessengerPage'
import PrivateRouter from '../shared/HOC/PrivateRouter/PrivateRouter'
import { userStore } from '../entities/user/store'

export default function MainRoutes() {
	const navigate = useNavigate()

	useLayoutEffect(() => {
		const handleMessage = event => {
			if (event.origin !== 'http://localhost:5173') {
				return
			}
			const { set: setUser } = userStore

			const { user, message } = event.data
			console.log('🚀 ~ handleMessage ~ event:', event)
			if (message === 'init') {
				setUser(user)
				navigate('/')
			}

			console.log('Полученные данные пользователя:', user)
		}

		window.addEventListener('message', handleMessage)

		return () => {
			window.removeEventListener('message', handleMessage)
		}
	}, [])
	return (
		<Routes>
			<Route element={<PrivateRouter />}>
				<Route path="/" element={<MessengerPage />} />
			</Route>
			<Route path="/login" element={<AuthPage />} />
		</Routes>
	)
}
