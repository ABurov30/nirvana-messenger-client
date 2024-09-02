import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { useState } from 'react'
import { appStore } from '../../../../../../entities/app/store'
import { editContact } from '../../../../../../entities/contact/actions'
import { contactStore } from '../../../../../../entities/contact/store'
import { Card } from '../../../../../../shared/UI/Card/Card'
import styles from '../List.module.scss'
import { ButtonsContextMenuConfig } from './config/ButtonsContextMenuConfig'

const ContactList = observer(() => {
	const { entities: contactList } = contactStore
	const { isModalOpen, setIsModalOpen } = appStore
	const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
	return (
		<>
			<Typography text={'Contacts'} fontSize="1.2em" weight="semibold" />
			{contactList?.length ? (
				contactList.map(contact => {
					return (
						<Card
							title={contact.name}
							key={contact.id}
							isModalOpen={isModalOpen}
							setIsModalOpen={setIsModalOpen}
							ButtonsContextMenuConfig={contact =>
								ButtonsContextMenuConfig(contact)
							}
							onContextMenu={e => {
								e.preventDefault()
								setIsContextMenuOpen(prev => !prev)
							}}
							isContextMenuOpen={isContextMenuOpen}
							setIsContextMenuOpen={setIsContextMenuOpen}
							entity={contact}
							onModalConfirm={editContact}
						/>
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
