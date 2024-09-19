import { appStore } from '../../../../../../../entities/app/store'
import { Process } from '../../../../../../../entities/app/types'
import { Contact } from '../../../../../../../entities/contact/types'

export const startUpdateContactProcess = (contact: Contact) => {
	const { setIsModalOpen, setProcess, setEntityToUpdate } = appStore
	setIsModalOpen(true)
	setEntityToUpdate(contact)
	setProcess(Process.editContact)
}
