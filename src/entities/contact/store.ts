import { makeObservable } from 'mobx'

import { EntitiesStore } from '../../shared/store/EntitiesStore'
import { Contact } from './types'

class ContactStore extends EntitiesStore<Contact> {
	constructor() {
		super()
		makeObservable(this)
	}
}

export const contactStore = new ContactStore()
