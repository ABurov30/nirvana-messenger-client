import { Avatar } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { appStore } from '../../../../../../entities/app/store'
import { editContact } from '../../../../../../entities/contact/actions'
import { contactStore } from '../../../../../../entities/contact/store'
import { Card } from '../../../../../../shared/UI/Card/Card'
import { ContextMenu } from '../../../../../../shared/UI/ContextMenu/ContextMenu'
import { Modal } from '../../../../../../shared/UI/Modal/Modal'
import styles from '../List.module.scss'
import { ButtonsContextMenuConfig } from './config/ButtonsContextMenuConfig'

const ContactList = observer(() => {
	const { entities: contactList } = contactStore
	const { isModalOpen, setIsModalOpen, entityToUpdate, setEntityToUpdate } =
		appStore

	return (
		<>
			<div className={styles.header}>
				<Typography
					text={'Contacts'}
					fontSize="1.2em"
					weight="semibold"
				/>
			</div>
			{contactList?.length ? (
				contactList.map(contact => {
					return (
						<Card
							title={contact.name}
							key={contact.id}
							entity={contact}
						>
							<ContextMenu
								buttons={ButtonsContextMenuConfig(contact)}
							/>
							<Modal
								onConfirm={() => {
									editContact(entityToUpdate)
								}}
								isModalOpen={isModalOpen}
								setIsModalOpen={setIsModalOpen}
							>
								<div className={styles.nameContainer}>
									<Avatar
										sx={{ padding: '10%' }}
										alt={entityToUpdate?.name}
									>
										{entityToUpdate?.name
											? entityToUpdate?.name[0]
											: ''}
									</Avatar>
									<div className={styles.inputContainer}>
										<Typography
											fontSize="1em"
											weight="semibold"
											text="Name"
										/>
										<input
											value={entityToUpdate?.name}
											onChange={e => {
												
												setEntityToUpdate({
													...entityToUpdate,
													name: e.target.value
												})
											}}
										/>
									</div>
								</div>
							</Modal>
						</Card>
					)
				})
			) : (
				<div className={styles.emptyList}>
					<Typography
						text={'No contacts'}
						fontSize="1.2em"
						weight="semibold"
					/>
				</div>
			)}
		</>
	)
})

export default ContactList
