import { appStore } from '../../../../../entities/app/store'
import { Process } from '../../../../../entities/app/types'

export const startUpdateChatProcess = () => {
	const { setIsModalOpen, setProcess } = appStore
	setIsModalOpen(true)
	setProcess(Process.editChat)
}
