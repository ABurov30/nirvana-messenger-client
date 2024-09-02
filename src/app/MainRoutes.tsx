import { Route, Routes } from 'react-router-dom'
import MessengerPage from '../pages/MessengerPage/MessengerPage'
import AuthPage from '../pages/AuthPage/AuthPage'
import PrivateRouter from '../shared/HOC/PrivateRouter/PrivateRouter'

export default function MainRoutes() {
	return (
		<Routes>
			<Route element={<PrivateRouter />}>
				<Route path="/" element={<MessengerPage />} />
			</Route>
			<Route path="/login" element={<AuthPage />} />
		</Routes>
	)
}
