import { observer } from 'mobx-react-lite'
import { appStore } from '../../entities/app/store'
import { Modal } from '../../shared/UI/Modal/Modal'
import { useUpdatedChat } from './hooks/useUpdatedChat'
import styles from './MessengerPage.module.scss'
import { getModalChildrenByProcess } from './utils/process/getModalChildrenByProcess'
import { getOnConfirmByProcess } from './utils/process/getOnConfirmByProcess'

import Chat from './widgets/Chat/Chat'
import InfoSection from './widgets/InfoSection/InfoSection'
import SideSection from './widgets/SideSection/SideSection'

const MessengerPage = observer(() => {
	const { socket, setIsModalOpen, isModalOpen, cancelProcess } = appStore

	useUpdatedChat(socket)

	return (
		<div className={styles.container}>
			<SideSection />
			<Chat />
			<InfoSection />
			<Modal
				setIsModalOpen={setIsModalOpen}
				isModalOpen={isModalOpen}
				onConfirm={getOnConfirmByProcess()}
				onClose={cancelProcess}
			>
				{getModalChildrenByProcess()}
			</Modal>
		</div>
	)
})

export default MessengerPage
