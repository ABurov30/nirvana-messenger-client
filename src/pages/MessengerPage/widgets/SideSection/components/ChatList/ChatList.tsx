import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { appStore } from '../../../../../../entities/app/store'
import { chatStore } from '../../../../../../entities/chat/store'
import { Card } from '../../../../../../shared/UI/Card/Card'
import styles from '../List.module.scss'
import { onChatSelection } from './handlers/onChatSelection'

const ChatList = observer(() => {
	const { entities: chatsList } = chatStore
	const { activeChat } = appStore
	return (
		<>
			<div className={styles.header}>
				<Typography text={'Chats'} fontSize="1.2em" weight="semibold" />
			</div>
			{chatsList?.length ? (
				chatsList.map(chat => {
					return (
						<Card
							key={chat.id}
							title={chat.name}
							subtitle={chat.lastMessage}
							activeEntity={activeChat}
							entity={chat}
							onSelection={() => onChatSelection(chat)}
						/>
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
