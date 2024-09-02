import { gql } from '@apollo/client'

export const EDIT_CONTACT = gql`
	mutation editContact($contact: EditContactInput!) {
		editContact(contact: $contact) {
			success
			errors {
				code
				message
			}
			contact {
				id
				name
				user {
					id
					nickname
					email
				}
			}
		}
	}
`

export const DELETE_CONTACT = gql`
	mutation deleteContact($contactId: String!) {
		deleteContact(contactId: $contactId) {
			success
			errors {
				code
				message
			}
		}
	}
`
