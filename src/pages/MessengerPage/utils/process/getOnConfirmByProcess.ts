//@ts-nocheck
import { appStore } from '../../../../entities/app/store'
import { Process } from '../../../../entities/app/types'
import { updateChat } from '../../../../entities/chat/actions'
import { chatStore } from '../../../../entities/chat/store'
import { editContact } from '../../../../entities/contact/actions'

export const getOnConfirmByProcess = () => {
	const { process, entityToUpdate } = appStore
	const { addMember } = chatStore

	switch (process) {
		case Process.editContact:
			return () => editContact(entityToUpdate)
		case Process.editChat:
			return () => updateChat(entityToUpdate)
		case Process.addMember:
			return () => addMember(entityToUpdate)
		default:
			return
	}
}
