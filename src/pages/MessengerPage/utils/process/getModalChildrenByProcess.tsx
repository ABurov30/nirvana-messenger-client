import { appStore } from '../../../../entities/app/store'
import { Process } from '../../../../entities/app/types'
import { AddMemberForm } from '../../widgets/Forms/AddMemberForm/AddMemberForm'
import { EditChatForm } from '../../widgets/Forms/EditChatForm/EditChatForm'
import { EditContactForm } from '../../widgets/Forms/EditContactForm/EditContactForm'

export const getModalChildrenByProcess = () => {
	const { process } = appStore
	switch (process) {
		case Process.editContact:
			return <EditContactForm />
		case Process.editChat:
			return <EditChatForm />
		case Process.addMember:
			return <AddMemberForm />
		default:
			return
	}
}
