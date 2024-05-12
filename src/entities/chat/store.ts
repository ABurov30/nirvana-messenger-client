import { makeAutoObservable, makeObservable } from 'mobx'

import { EntitiesStore } from '../../shared/store/EntitiesStore'

import { Chat } from './types'

class ChatStore extends EntitiesStore<Chat> {
	constructor() {
		super()
		makeObservable(this)
	}
}

export const chatStore = new ChatStore()
