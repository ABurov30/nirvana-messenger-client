import { gql } from '@apollo/client'

export const ADD_CHAT = gql`
	mutation addChat($userId: String!) {
		addChat(userId: $userId) {
			success
			errors {
				code
				message
			}
			chat {
				id
				name
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
