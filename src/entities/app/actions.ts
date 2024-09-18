import { Message } from 'postcss'
import { appStore } from './store'
import { Process } from './types'

export const cancelProcess = () => {
	const { setProcess, setInput, setCurrentMessage } = appStore
	setProcess(Process.none)
	setInput('')
	setCurrentMessage({} as Message)
}
