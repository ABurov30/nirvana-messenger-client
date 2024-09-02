import { gql } from '@apollo/client'

export const GET_SEARCH_ENTITIES = gql`
	query getSearchEntities($input: String!) {
		getSearchEntities(input: $input) {
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
			users {
				id
				nickname
				email
			}
		}
	}
`
