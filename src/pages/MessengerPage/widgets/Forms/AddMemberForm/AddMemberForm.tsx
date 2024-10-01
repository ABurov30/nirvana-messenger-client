import { useQuery } from '@apollo/client'
import { Spin } from 'antd'
import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { useEffect, useState } from 'react'
import { appStore } from '../../../../../entities/app/store'
import { GET_ALL_CONTACTS_TO_ADD_IN_CHAT } from '../../../../../entities/contact/query'
import { userStore } from '../../../../../entities/user/store'
import { Card } from '../../../../../shared/UI/Card/Card'
import styles from './AddMemberForm.module.scss'

export const AddMemberForm = observer(() => {
	const { entity: user } = userStore
	const [contactsToAdd, setContactsToAdd] = useState([])
	const { activeChat, entityToUpdate, setEntityToUpdate } = appStore
	const { data, loading } = useQuery(GET_ALL_CONTACTS_TO_ADD_IN_CHAT, {
		variables: {
			userId: user?.id,
			chatId: activeChat?.id
		},
		fetchPolicy: 'no-cache'
	})

	useEffect(() => {
		if (!loading) {
			setContactsToAdd(data?.getContactsToAddInChat?.contacts)
		}
	}, [data])

	return (
		<div className={styles.form}>
			<div className={styles.header}>
				<Typography
					text={'Choose members from your contacts'}
					fontSize="1em"
					weight="semibold"
				/>
			</div>
			<div className={styles.contacts}>
				{loading ? (
					<Spin />
				) : (
					<>
						{contactsToAdd.map(contact => (
							<div className={styles.contact} key={contact?.id}>
								<Card entity={contact} title={contact.name} />
								<input
									type="checkbox"
									onChange={e => {
										if (e.target.checked) {
											setEntityToUpdate([
												...entityToUpdate,
												contact
											])
										} else {
											setEntityToUpdate(
												entityToUpdate.filter(el => {
													if (el.id !== contact?.id) {
														return el
													}
												})
											)
										}
									}}
								/>
							</div>
						))}
					</>
				)}
			</div>
		</div>
	)
})
