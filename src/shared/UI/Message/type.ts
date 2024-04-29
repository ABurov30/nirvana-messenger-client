import { Message } from '../../../entities/message/types'
import { ActiveUser } from '../../../entities/user/types'

export interface MessageProps {
	user: ActiveUser
	message: Message
}
