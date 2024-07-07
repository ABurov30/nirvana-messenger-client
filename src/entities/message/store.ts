import { makeAutoObservable, makeObservable } from 'mobx'

import { EntitiesStore } from '../../shared/store/EntitiesStore'
import { Message } from './types'

class MessageStore extends EntitiesStore<Message> {
	constructor() {
		super()
		makeObservable(this)
	}
}

export const messageStore = new MessageStore()
