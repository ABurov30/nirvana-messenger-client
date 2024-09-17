import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { chatStore } from '../../../../../../entities/chat/store'
import { Card } from '../../../../../../shared/UI/Card/Card'
import styles from '../List.module.scss'
import { onChatSelection } from './handlers/onChatSelection'

const ChatList = observer(() => {
	const { entities: chatsList } = chatStore
	return (
		<>
			<Typography text={'Chats'} fontSize="1.2em" weight="semibold" />
			{chatsList?.length ? (
				chatsList.map(chat => {
					return (
						<Card
							key={chat.id}
							title={chat.name}
							subtitle={chat.lastMessage}
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
