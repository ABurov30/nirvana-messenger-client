import isEmpty from 'lodash.isempty'

import { useEffect } from 'react'
import { Socket } from 'socket.io-client'
import { chatStore } from '../../../entities/chat/store'
import { Chat } from '../../../entities/chat/types'

export const useUpdatedChat = (socket: Socket) => {
	const { updateChat } = chatStore

	useEffect(() => {
		socket.on('updated chat', async (data: Chat) => {
			try {
				if (isEmpty(data)) return

				updateChat(data)
			} catch (e) {
				console.error(e)
			}
		})
	}, [socket])
}
