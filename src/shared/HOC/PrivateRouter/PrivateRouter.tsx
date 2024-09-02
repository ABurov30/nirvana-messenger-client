import { Navigate, Outlet } from 'react-router-dom'
import { isEmpty } from 'lodash'
import { IProps } from './type'
import { toJS } from 'mobx'
import { userStore } from '../../../entities/user/store'

export default function PrivateRouter({
	children,
	redirectPath = '/login'
}: IProps): JSX.Element {
	if (isEmpty(toJS(userStore.entity)))
		return <Navigate to={redirectPath} replace />
	return children || <Outlet />
}
