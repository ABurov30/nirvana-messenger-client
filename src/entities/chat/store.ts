import { action, makeObservable } from 'mobx'

import { EntitiesStore } from '../../shared/store/EntitiesStore'

import { Chat } from './types'

import { appStore } from '../app/store'
import { Message } from '../message/types'

class ChatStore extends EntitiesStore<Chat> {
	constructor() {
		super()
		makeObservable(this, {
			updateMessage: action,
			deleteMessage: action,
			getMessage: action
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
}

export const chatStore = new ChatStore()
