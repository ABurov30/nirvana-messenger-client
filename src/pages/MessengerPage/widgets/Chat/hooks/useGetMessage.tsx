import isEmpty from 'lodash.isempty'
import { useEffect } from 'react'
import { Socket } from 'socket.io-client'
import { chatStore } from '../../../../../entities/chat/store'
import { Message } from '../../../../../entities/message/types'

export const useGetMessage = (socket: Socket) => {
	const { getMessage } = chatStore

	return useEffect(() => {
		socket.on('get message', async (data: Message) => {
			try {
				if (isEmpty(data)) return
				
				getMessage(data)
			} catch (e) {
				console.error(e)
			}
		})
	}, [socket])
}
