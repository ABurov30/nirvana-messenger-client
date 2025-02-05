import { action, makeObservable, observable } from 'mobx'

export class EntityStore<T extends Entity> {
	entity: T = {} as T
	constructor() {
		makeObservable(this, {
			entity: observable,
			set: action,
			delete: action
		})
	}

	set = (data: T) => {
		this.entity = data
	}

	get = (): T => {
		return this.entity
	}

	delete = () => {
		this.entity = {} as T
	}
}
