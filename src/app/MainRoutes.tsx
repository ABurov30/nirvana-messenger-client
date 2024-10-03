//@ts-nocheck
import { useLayoutEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { userStore } from '../entities/user/store'
import AuthPage from '../pages/AuthPage/AuthPage'
import MessengerPage from '../pages/MessengerPage/MessengerPage'
import PrivateRouter from '../shared/HOC/PrivateRouter/PrivateRouter'

export default function MainRoutes() {
	const navigate = useNavigate()

	useLayoutEffect(() => {
		const handleMessage = event => {
			const { set: setUser } = userStore

			const { user, message } = event.data

			if (message === 'init') {
				setUser(user)
				navigate('/')
			}
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
