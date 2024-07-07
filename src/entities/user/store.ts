import { makeAutoObservable, makeObservable } from 'mobx'
import { User } from './types'
import { EntityStore } from '../../shared/store/EntityStore'

export class UserStore extends EntityStore<User> {
	constructor() {
		super()
		makeObservable(this)
	}
}

export const userStore = new UserStore()
