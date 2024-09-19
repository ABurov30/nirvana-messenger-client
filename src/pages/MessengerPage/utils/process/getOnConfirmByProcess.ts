import { toJS } from 'mobx'
import { appStore } from '../../../../entities/app/store'
import { Process } from '../../../../entities/app/types'
import { updateChat } from '../../../../entities/chat/actions'
import { editContact } from '../../../../entities/contact/actions'

export const getOnConfirmByProcess = () => {
	const { process, entityToUpdate } = appStore
	console.log(toJS(entityToUpdate), 'entityToUpdate getOnConfirmByProcess')
	switch (process) {
		case Process.editContact:
			return () => editContact(entityToUpdate)
		case Process.editChat:
			return () => updateChat(entityToUpdate)
		case Process.addMember:
			return () => console.log('run add member action')
		default:
			return
	}
}
