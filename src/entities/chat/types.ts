import { Message } from '../message/types'
import { User } from '../user/types'

export interface Chat extends Entity {
	name: string
	messages: Message[]
	members: User[]
}
