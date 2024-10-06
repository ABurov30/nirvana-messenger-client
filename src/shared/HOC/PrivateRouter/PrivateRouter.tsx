//@ts-nocheck
import { isEmpty } from 'lodash'
import { toJS } from 'mobx'
import { Navigate, Outlet } from 'react-router-dom'
import { userStore } from '../../../entities/user/store'
import { IProps } from './type'

export default function PrivateRouter({
	children,
	redirectPath = '/login'
}: IProps): JSX.Element {
	if (isEmpty(toJS(userStore.entity)))
		return <Navigate to={redirectPath} replace />
	return children || <Outlet />
}
