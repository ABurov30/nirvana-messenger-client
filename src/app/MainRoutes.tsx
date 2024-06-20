import { Route, Routes } from 'react-router-dom'
import MessengerPage from '../pages/MessengerPage/MessengerPage'

export default function MainRoutes() {
	return (
		<Routes>
			<Route path="/messenger" element={<MessengerPage />} />
		</Routes>
	)
}
