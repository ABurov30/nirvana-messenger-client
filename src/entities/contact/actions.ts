import { toJS } from 'mobx'
import { apolloClient } from '../../shared/apollo/client'
import { userStore } from '../user/store'
import { User } from '../user/types'
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './mutation'
import { contactStore } from './store'
import { Contact } from './types'

export const deleteContact = async (contactId: string) => {
	const { delete: deleteContact } = contactStore
	await apolloClient.mutate({
		mutation: DELETE_CONTACT,
		variables: { contactId: contactId }
	})
	deleteContact(contactId)
}

export const editContact = async (contact: Contact) => {
	console.log(toJS(contact), '00000000000')
	const { entity: user } = userStore
	const { update: editContact } = contactStore
	delete contact.__typename
	delete contact.user
	contact.contactOwnerId = user.id

	const { data } = await apolloClient.mutate({
		mutation: EDIT_CONTACT,
		variables: { contact: contact }
	})

	editContact(data.editContact.contact)
}

export const addContact = async (contact: User) => {
	const { entity: user } = userStore
	const { add: addContact } = contactStore
	delete contact.__typename
	const userPayload = {
		id: user.id,
		nickname: user.nickname,
		email: user.email
	}

	const { data } = await apolloClient.mutate({
		mutation: ADD_CONTACT,
		variables: { user: userPayload, contact }
	})

	addContact(data.addContact.contact)
}
