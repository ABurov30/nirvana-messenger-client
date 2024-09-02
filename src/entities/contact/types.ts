import { User } from '../user/types'

export interface Contact extends Entity {
	name: string
	user: User
	contactOwnerId: string
}
