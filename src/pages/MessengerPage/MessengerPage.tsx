import { observer } from 'mobx-react-lite'
import styles from './MessengerPage.module.scss'
import Chat from './widgets/Chat/Chat'
import InfoSection from './widgets/InfoSection/InfoSection'
import SideSection from './widgets/SideSection/SideSection'

const MessengerPage = observer(() => {
	return (
		<div className={styles.container}>
			<SideSection />
			<Chat />
			<InfoSection />
		</div>
	)
})

export default MessengerPage
