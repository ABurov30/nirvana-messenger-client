import { apolloClient } from '../../shared/apollo/client'
import { userStore } from '../user/store'
import { DELETE_CONTACT, EDIT_CONTACT } from './mutation'
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
	console.log("🚀 ~ editContact ~ data:", data)

	editContact(data.editContact.contact)
}
