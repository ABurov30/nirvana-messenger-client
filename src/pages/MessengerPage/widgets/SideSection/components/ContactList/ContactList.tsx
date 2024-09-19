import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { contactStore } from '../../../../../../entities/contact/store'
import { Card } from '../../../../../../shared/UI/Card/Card'
import { ContextMenu } from '../../../../../../shared/UI/ContextMenu/ContextMenu'
import styles from '../List.module.scss'
import { ButtonsContextMenuConfig } from './config/ButtonsContextMenuConfig'

const ContactList = observer(() => {
	const { entities: contactList } = contactStore

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
