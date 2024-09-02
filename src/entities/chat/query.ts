import { gql } from '@apollo/client'

export const GET_ALL_CHATS_BY_USER = gql`
	query getChatsByUser($id: String!) {
		getChatsByUser(id: $id) {
			success
			errors {
				code
				message
			}
			chats {
				id
				name
				lastMessage
				isNewMessage
				messages {
					id
					userId
					message
					chatId
					user {
						id
						nickname
						email
					}
				}
				members {
					id
					email
					nickname
				}
			}
		}
	}
`
