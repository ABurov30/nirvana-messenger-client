import { Chat } from '../../../entities/chat/types'
import { Message } from '../../../entities/message/types'

export interface ChatCardProps {
	chat: Chat
	activeChat: Chat
	setActiveChat: (chat: Chat) => void
	setMessageList: (chat: Message[]) => void
	updateChatsList: (chat: Chat) => void
}
