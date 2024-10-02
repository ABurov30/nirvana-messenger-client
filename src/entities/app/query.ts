import { gql } from '@apollo/client'

export const GET_SEARCH_ENTITIES = gql`
	query getSearchEntities($input: String!, $userId: String!) {
		getSearchEntities(input: $input, userId: $userId) {
			success
			errors {
				code
				message
			}
			chats {
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
