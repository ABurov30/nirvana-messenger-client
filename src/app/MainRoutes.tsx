//@ts-nocheck
import { useLayoutEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { userStore } from '../entities/user/store'
import AuthPage from '../pages/AuthPage/AuthPage'
import MessengerPage from '../pages/MessengerPage/MessengerPage'
import PrivateRouter from '../shared/HOC/PrivateRouter/PrivateRouter'
import { useParentWindow } from './hooks/useParentWindow'

export default function MainRoutes() {
useParentWindow()
	return (
		<Routes>
			<Route element={<PrivateRouter />}>
				<Route path="/" element={<MessengerPage />} />
			</Route>
			<Route path="/login" element={<AuthPage />} />
		</Routes>
	)
}
