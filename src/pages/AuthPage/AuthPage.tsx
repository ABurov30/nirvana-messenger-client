//@ts-nocheck
import { BlockButton, Typography } from 'nirvana-uikit'
import { GoogleIcon } from '../../shared/icons/GoogleIcon'
import styles from './AuthPage.module.scss'

import { useNavigate } from 'react-router-dom'

import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import isEmpty from 'lodash.isempty'
import { toJS } from 'mobx'
import { useLayoutEffect } from 'react'
import { userStore } from '../../entities/user/store'
import { UserStatus } from '../../entities/user/types'

function AuthPage() {
	const navigate = useNavigate()

	const { set: setUser } = userStore

	const googleLogin = useGoogleLogin({
		onSuccess: async codeResponse => {
			try {
				const res = await axios.get(
					`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
					{
						headers: {
							Authorization: `Bearer ${codeResponse.access_token}`,
							Accept: 'application/json'
						}
					}
				)
				const { data } = res
				const { name, verified_email } = data

				setUser({
					...data,
					nickname: name,
					confirmed: verified_email,
					status: verified_email
						? UserStatus.active
						: UserStatus.nonActive
				})

				navigate('/')
			} catch (err) {
				console.error(err)
			}
		},

		onError: err => console.error(err, 'err')
	})

	useLayoutEffect(() => {
		if (!isEmpty(toJS(userStore.entity))) navigate('/')
	}, [toJS(userStore.entity)])

	return (
		<div className={styles.authPage}>
			1
			<div className={styles.authForm}>
				<Typography
					text="Please authorize"
					color="#f3f3f3"
					weight="semibold"
					fontSize="21px"
				/>
				<BlockButton
					text="Google"
					icon={<GoogleIcon />}
					onClick={googleLogin}
				/>
			</div>
		</div>
	)
}

export default AuthPage
