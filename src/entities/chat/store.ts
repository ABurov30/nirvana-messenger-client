import { action, makeObservable } from 'mobx'

import { EntitiesStore } from '../../shared/store/EntitiesStore'

import { Chat } from './types'

import { Message } from '../message/types'

class ChatStore extends EntitiesStore<Chat> {
	constructor() {
		super()
		makeObservable(this, {
			updateMessage: action,
			deleteMessage: action
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
		return this.entities.find(chat => {
			if (chat.id === message.chatId) {
				return chat
			}
		})
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
		return this.entities.find(chat => {
			if (chat.id === message.chatId) {
				return chat
			}
		})
	}
}

export const chatStore = new ChatStore()
