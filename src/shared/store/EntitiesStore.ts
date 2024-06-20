import { action, makeObservable, observable } from 'mobx'

export class EntitiesStore<T extends Entity> {
	entities: T[] = []
	constructor() {
		makeObservable(this, {
			entities: observable,
			set: action,
			add: action,
			delete: action,
			update: action
		})
	}

	set = (data: T[]) => {
		this.entities = data
	}

	add = (data: T) => {
		const added = [...this.entities, data]
		this.set(added)
	}

	delete = (id: string) => {
		const filtered = this.entities.filter(el => el?.id !== id)
		this.set(filtered)
	}

	update = (data: T) => {
		const updated = this.entities.map(el =>
			el?.id === data.id ? data : el
		)
		this.set(updated)
	}
}
