import { Message } from '../message/types'

export interface Chat extends Entity {
	name: string
	lastMessage: string
	isNewMessage: boolean
	messages: Message[]
}
