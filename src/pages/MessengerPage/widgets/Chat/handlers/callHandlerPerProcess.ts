import { appStore } from '../../../../../entities/app/store'
import { Process } from '../../../../../entities/app/types'
import { sendMessage } from './sendMessage'
import { updateMessage } from './updateMessage'

export const callHandlerPerProcess = (e: Event) => {
	e.preventDefault()
	const { process } = appStore

	switch (process) {
		case Process.editMessage:
			updateMessage()
			break
		case Process.none:
			sendMessage()
			break
	}
}
