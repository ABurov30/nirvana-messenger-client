import { appStore } from '../../../../../entities/app/store'
import { Process } from '../../../../../entities/app/types'
import { sendMessage, updateMessage } from '../../../../../entities/message/actions'


export const callActionPerProcess = (e: Event) => {
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
