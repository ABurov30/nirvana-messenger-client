import { Message } from '../../../entities/message/types'
import { User } from '../../../entities/user/types'

export interface ChatProps {
	messageList: Message[]
	addMessageList: (data: Message) => void
	userValue: User
}
