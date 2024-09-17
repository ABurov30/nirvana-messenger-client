import { Chat } from '../chat/types'
import { Message } from '../message/types'
import { User } from '../user/types'

export enum Process {
	editMessage = 'editMessage',
	editContact = 'editContact',
	addContact = 'addContact',
	none = 'none'
}

export enum MenuMode {
	chat = 'chat',
	contact = 'contact',
	search = 'search'
}

export interface SearchEntities {
	messages: Message[]
	chats: Chat[]
	users: User[]
}
