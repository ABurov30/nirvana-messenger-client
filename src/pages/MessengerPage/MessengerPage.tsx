import { observer } from 'mobx-react-lite'
import { appStore } from '../../entities/app/store'
import { useUpdatedChat } from './hooks/useUpdatedChat'
import styles from './MessengerPage.module.scss'
import Chat from './widgets/Chat/Chat'
import InfoSection from './widgets/InfoSection/InfoSection'
import SideSection from './widgets/SideSection/SideSection'

const MessengerPage = observer(() => {
	const { socket } = appStore
	useUpdatedChat(socket)
	return (
		<div className={styles.container}>
			<SideSection />
			<Chat />
			<InfoSection />
		</div>
	)
})

export default MessengerPage
