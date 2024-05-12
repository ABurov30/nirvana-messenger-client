export type UserFromBackend = {
	id: string
	email: string
	nickname: string
	confirmed: boolean
	isAdmin: boolean
}

export type ActiveUser = UserFromBackend & {
	status: UserStatus.active
}

export type FetchingUser = {
	status: UserStatus.fetching
}

export type NonActiveUser = UserFromBackend & {
	status: UserStatus.nonActive
}

export type Guest = {
	status: UserStatus.guest
}

export enum UserStatus {
	guest = 'guest',
	nonActive = 'non-active',
	fetching = 'fetching',
	active = 'active'
}

export type User = ActiveUser | Guest | FetchingUser | NonActiveUser
