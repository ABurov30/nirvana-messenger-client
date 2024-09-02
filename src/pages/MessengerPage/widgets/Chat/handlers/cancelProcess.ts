import { appStore } from "../../../../../entities/app/store"
import { Process } from "../../../../../entities/app/types"
import { Message } from "../../../../../entities/message/types"

export const cancelProcess = () => {
	const { setProcess, setInput, setCurrentMessage } = appStore
	setProcess(Process.none)
	setInput('')
	setCurrentMessage({} as Message)
}
