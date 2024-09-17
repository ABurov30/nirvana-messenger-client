import { apolloClient } from '../../shared/apollo/client'
import { userStore } from '../user/store'
import { User } from '../user/types'
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './mutation'
import { contactStore } from './store'
import { Contact } from './types'

export const deleteContact = async (contactId: string) => {
	console.log('🚀 ~ deleteContact ~ contactId:', contactId)
	const { delete: deleteContact } = contactStore
	await apolloClient.mutate({
		mutation: DELETE_CONTACT,
		variables: { contactId: contactId }
	})
	deleteContact(contactId)
}

export const editContact = async (contact: Contact) => {
	const { entity: user } = userStore
	const { update: editContact } = contactStore
	delete contact.__typename
	delete contact.user
	contact.contactOwnerId = user.id

	const { data } = await apolloClient.mutate({
		mutation: EDIT_CONTACT,
		variables: { contact: contact }
	})
	console.log('🚀 ~ editContact ~ data:', data)

	editContact(data.editContact.contact)
}

export const addContact = async (contact: User) => {
	console.log(contact)
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
	console.log('🚀 ~ addContact ~ data:')

	addContact(data.addContact.contact)
}
