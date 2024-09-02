import { Message } from '../message/types'
import { User } from '../user/types'

export interface Chat extends Entity {
	name: string
	lastMessage: string
	isNewMessage: boolean
	messages: Message[]
	isCurrent?: boolean
	members: User[]
}
