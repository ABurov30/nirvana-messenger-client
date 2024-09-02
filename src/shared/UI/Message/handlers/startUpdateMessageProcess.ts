import { appStore } from '../../../../entities/app/store'
import { Process } from '../../../../entities/app/types'
import { Message } from '../../../../entities/message/types'

export const startUpdateMessageProcess = (e: Event, message: Message) => {
	e.preventDefault()
	const { setInput, setProcess, setCurrentMessage } = appStore
	setInput(message.message)
	setProcess(Process.editMessage)
	setCurrentMessage(message)
}
