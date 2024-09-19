import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { appStore } from '../../../../../../entities/app/store'
import { editContact } from '../../../../../../entities/contact/actions'
import { contactStore } from '../../../../../../entities/contact/store'
import { Card } from '../../../../../../shared/UI/Card/Card'
import styles from '../List.module.scss'
import { ButtonsContextMenuConfig } from './config/ButtonsContextMenuConfig'

const ContactList = observer(() => {
	const { entities: contactList } = contactStore
	const { isModalOpen, setIsModalOpen } = appStore

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
							isModalOpen={isModalOpen}
							setIsModalOpen={setIsModalOpen}
							ButtonsContextMenuConfig={contact =>
								ButtonsContextMenuConfig(contact)
							}
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
