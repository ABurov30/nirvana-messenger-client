import { makeObservable } from 'mobx'

import { EntitiesStore } from '../../shared/store/EntitiesStore'

import { Chat } from './types'

class ChatStore extends EntitiesStore<Chat> {
	activeChat: Chat = {} as Chat
	constructor() {
		super()
		makeObservable(this)
	}

	setActiveChat = (data: Chat) => {
		this.activeChat = data
	}
}

export const chatStore = new ChatStore()
