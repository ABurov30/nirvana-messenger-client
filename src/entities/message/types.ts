import { User } from '../user/types'

export interface Message extends Entity {
	message: string
	userId?: string
	chatId?: string
	user: User
}
