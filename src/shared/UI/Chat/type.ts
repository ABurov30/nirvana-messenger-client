import { Chat } from '../../../entities/chat/types'
import { Message } from '../../../entities/message/types'
import { User } from '../../../entities/user/types'

export interface ChatProps {
	messageList: Message[]
	activeChat: Chat
	addMessageList: (data: Message) => void
	updateChatsList: (data: Chat) => void
	userValue: User
}
