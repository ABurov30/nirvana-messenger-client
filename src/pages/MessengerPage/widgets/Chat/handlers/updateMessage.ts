import { toJS } from 'mobx'
import { appStore } from '../../../../../entities/app/store'
import { chatStore } from '../../../../../entities/chat/store'
import { userStore } from '../../../../../entities/user/store'
import { cancelProcess } from './cancelProcess'

export const updateMessage = () => {
	const { entity: user } = userStore
	const { currentMessage, input, socket } = appStore

	const { updateMessage } = chatStore

	const obj = {
		message: input,
		id: toJS(currentMessage?.id),
		chatId: toJS(currentMessage?.chatId),
		userId: toJS(currentMessage?.userId),
		user: user
	} as Message

	socket.emit('update message', obj)

	updateMessage(obj)

	cancelProcess()
}
