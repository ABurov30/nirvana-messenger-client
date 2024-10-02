import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { appStore } from '../../../../../../entities/app/store'
import { addChat } from '../../../../../../entities/chat/actions'
import { chatStore } from '../../../../../../entities/chat/store'
import { AddButton } from '../../../../../../shared/UI/Buttons/AddButton'
import { Card } from '../../../../../../shared/UI/Card/Card'
import { ContextMenu } from '../../../../../../shared/UI/ContextMenu/ContextMenu'
import styles from '../List.module.scss'
import { ButtonsContextMenuConfig } from './config/ButtonsContextMenuConfig'
import { onChatSelection } from './handlers/onChatSelection'

const ChatList = observer(() => {
	const { entities: chatsList } = chatStore
	const { activeChat } = appStore
	return (
		<>
			<div className={styles.header}>
				<Typography text={'Chats'} fontSize="1.2em" weight="semibold" />
				<AddButton onClick={addChat} />
			</div>
			{chatsList?.length ? (
				chatsList.map(chat => {
					return (
						<Card
							key={chat.id}
							title={chat.name}
							subtitle={
								chat?.messages?.length
									? chat?.messages[chat?.messages?.length - 1]
											.message
									: ''
							}
							activeEntity={activeChat}
							entity={chat}
							onSelection={() => onChatSelection(chat)}
						>
							<ContextMenu
								buttons={ButtonsContextMenuConfig(chat)}
							/>
						</Card>
					)
				})
			) : (
				<div className={styles.emptyList}>
					<Typography
						text={'No chats'}
						fontSize="1.2em"
						weight="semibold"
					/>
				</div>
			)}
		</>
	)
})

export default ChatList
