import { Send } from '@mui/icons-material'

import styles from './Chat.module.scss'

import CancelIcon from '@mui/icons-material/Cancel'
import { Avatar } from '@mui/material'
import isEmpty from 'lodash.isempty'
import { Typography } from 'nirvana-uikit'

import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'

import { appStore } from '../../../../entities/app/store'
import { userStore } from '../../../../entities/user/store'
import { callActionPerProcess } from './handlers/callActionPerProcess'

import { cancelProcess } from '../../../../entities/app/actions'
import Message from '../../../../shared/UI/Message/Message'
import { useDeletedMessage } from './hooks/useDeletedMessage'
import { useGetMessage } from './hooks/useGetMessage'
import { useUpdatedMessage } from './hooks/useUpdatedMessage'
import { getIconPerProcess } from './utils/getIconPerProcess'

const Chat = observer(() => {
	const { activeChat } = appStore
	const {
		input,
		setInput,
		currentMessage,
		socket,
		setIsInfoSectionOpen,
		isInfoSectionOpen
	} = appStore

	const { entity: user } = userStore

	useUpdatedMessage(socket)
	useDeletedMessage(socket)
	useGetMessage(socket)

	return (
		<div className={styles.chat}>
			{!isEmpty(activeChat) ? (
				<>
					<div
						className={styles.header}
						onClick={() => setIsInfoSectionOpen(!isInfoSectionOpen)}
					>
						<Avatar sx={{ padding: '5px' }} alt={activeChat?.name}>
							{activeChat?.name ? activeChat?.name[0] : ''}
						</Avatar>
						<div className={styles.textContainer}>
							<div className={styles.nameContainer}>
								{activeChat?.name ? (
									<Typography
										text={activeChat?.name}
										fontSize="1.2em"
										weight="semibold"
									/>
								) : null}
							</div>
						</div>
					</div>
					<div className={styles.chatHistory}>
						{activeChat?.messages?.length
							? activeChat?.messages?.map((message, i) => (
									<Message
										key={message.message + i + user.id}
										message={message}
									/>
							  ))
							: null}
					</div>
					{!isEmpty(toJS(currentMessage)) && (
						<div className={styles.currentMessageContainer}>
							<div className={styles.iconContainer}>
								{getIconPerProcess()}
							</div>
							<div className={styles.divider}></div>
							<div className={styles.currentMessage}>
								{currentMessage.message}
							</div>
							<button
								className={styles.cancelButton}
								onClick={cancelProcess}
							>
								<CancelIcon />
							</button>
						</div>
					)}
					<div className={styles.formContainer}>
						<form className={styles.form}>
							<div className={styles.inputContainer}>
								<input
									className={styles.input}
									value={toJS(input)}
									onChange={e => setInput(e.target.value)}
								/>
								<button
									type="submit"
									disabled={!toJS(input.length)}
									className={styles.button}
									onClick={e => callActionPerProcess(e)}
								>
									<Send />
								</button>
							</div>
						</form>
					</div>
				</>
			) : (
				<Typography
					text={'No active chat'}
					fontSize="1.2em"
					weight="semibold"
				/>
			)}
		</div>
	)
})

export default Chat
