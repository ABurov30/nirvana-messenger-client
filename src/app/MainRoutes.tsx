//@ts-nocheck
import { useLayoutEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { userStore } from '../entities/user/store'
import MessengerPage from '../pages/MessengerPage/MessengerPage'

export default function MainRoutes() {
	const navigate = useNavigate()

	useLayoutEffect(() => {
		const handleMessage = event => {
			// if (event.origin !== 'http://localhost:5173') {
			// 	return
			// }
			const { set: setUser } = userStore
			console.log('Salam:', event)
			console.log('Salam2:', event.data)
			const { user, message } = event.data
			console.log('🚀 ~ handleMessage ~ event:', event)
			if (message === 'init') {
				setUser(user)
				navigate('/')
			}

			const responseMessage = { user, status: 'success' }
			window.parent.postMessage(responseMessage, '*')

			console.log('Полученные данные пользователя:', user)
		}

		window.addEventListener('message', handleMessage)

		return () => {
			window.removeEventListener('message', handleMessage)
		}
	}, [])
	return (
		<Routes>
			{/* <Route element={<PrivateRouter />}> */}
			<Route path="/" element={<MessengerPage />} />
			{/* </Route>
			<Route path="/login" element={<AuthPage />} /> */}
		</Routes>
	)
}
