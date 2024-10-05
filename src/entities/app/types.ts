import { Chat } from '../chat/types'
import { Message } from '../message/types'
import { User } from '../user/types'

export enum Process {
	editMessage = 'editMessage',
	editContact = 'editContact',
	addMember = 'addMember',
	addContact = 'addContact',
	editChat = 'editChat',
	none = 'none'
}

export enum MenuMode {
	chat = 'chat',
	contact = 'contact',
	search = 'search'
}

export enum Theme {
	dark = 'dark',
	light = 'light'
}

export interface SearchEntities {
	messages: Message[]
	chats: Chat[]
	users: User[]
}
