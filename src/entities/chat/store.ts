import { action, makeObservable } from 'mobx'

import { EntitiesStore } from '../../shared/store/EntitiesStore'

import { Chat } from './types'

import { appStore } from '../app/store'
import { Contact } from '../contact/types'
import { Message } from '../message/types'
import { ActiveUser } from '../user/types'

class ChatStore extends EntitiesStore<Chat> {
	constructor() {
		super()
		makeObservable(this, {
			updateMessage: action,
			deleteMessage: action,
			getMessage: action,
			addMember: action
		})
	}

	updateMessage = (message: Message): Chat => {
		this.entities = this.entities.map(chat => {
			if (chat.id === message.chatId) {
				return {
					...chat,
					messages: chat?.messages.map(msg => {
						if (msg.id === message.id) {
							return message
						} else {
							return msg
						}
					})
				}
			} else {
				return chat
			}
		})
		const updatedChat = this.entities.find(chat => {
			if (chat.id === message.chatId) {
				return chat
			}
		})
		const { activeChat, setActiveChat } = appStore
		if (updatedChat?.id === activeChat?.id) {
			setActiveChat(updatedChat)
		}
	}

	getMessage = (message: Message): Chat => {
		this.entities = this.entities.map(chat => {
			if (chat.id === message.chatId) {
				return {
					...chat,
					messages: [...chat?.messages, message]
				}
			} else {
				return chat
			}
		})
		const updatedChat = this.entities.find(chat => {
			if (chat.id === message.chatId) {
				return chat
			}
		})
		const { activeChat, setActiveChat } = appStore
		if (updatedChat?.id === activeChat?.id) {
			setActiveChat(updatedChat)
		}
	}

	updateChat = (updatedChat: Chat) => {
		this.update(updatedChat)
		const { activeChat, setActiveChat } = appStore
		if (updatedChat?.id === activeChat?.id) {
			setActiveChat(updatedChat)
		}
	}

	deleteMessage = (message: Message): Chat => {
		this.entities = this.entities.map(chat => {
			if (chat.id === message.chatId) {
				return {
					...chat,
					messages: chat?.messages.filter(msg => {
						if (msg.id !== message.id) {
							return msg
						}
					})
				}
			} else {
				return chat
			}
		})
		const updatedChat = this.entities.find(chat => {
			if (chat.id === message.chatId) {
				return chat
			}
		})
		const { activeChat, setActiveChat } = appStore
		if (updatedChat?.id === activeChat?.id) {
			setActiveChat(updatedChat)
		}
	}

	addMember = (members: Contact[]) => {
		const { socket, cancelProcess, activeChat } = appStore

		const usersToAdd = members.map(member => member?.user)
		socket.emit('add members', { usersToAdd, chatId: activeChat.id })

		const updatedChat = {
			...activeChat,
			members: [...activeChat?.members, ...usersToAdd]
		}
		this.updateChat(updatedChat)
		cancelProcess()
	}

	deleteMember = (memberId: ActiveUser['id']) => {
		const { socket, cancelProcess, activeChat } = appStore
		socket.emit('delete member', { memberId, chatId: activeChat.id })

		const updatedChat = {
			...activeChat,
			members: activeChat?.members.filter(
				member => member?.id !== memberId
			)
		}
		this.updateChat(updatedChat)
		cancelProcess()
	}
}

export const chatStore = new ChatStore()
