import { gql } from '@apollo/client'

export const GET_ALL_CHATS = gql`
	query {
		queryChats {
			success
			errors {
				code
				message
			}
			chats {
				id
				name
				lastMessage
			}
		}
	}
`
