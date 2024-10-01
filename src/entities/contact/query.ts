import { gql } from '@apollo/client'

export const GET_ALL_CONTACTS_BY_USER = gql`
	query getContactsByUser($id: String!) {
		getContactsByUser(id: $id) {
			success
			errors {
				code
				message
			}
			contacts {
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

export const GET_ALL_CONTACTS_TO_ADD_IN_CHAT = gql`
	query getContactsToAddInChat($userId: String!, $chatId: String!) {
		getContactsToAddInChat(userId: $userId, chatId: $chatId) {
			success
			errors {
				code
				message
			}
			contacts {
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
