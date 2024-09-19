import { Avatar } from '@mui/material'
import isEmpty from 'lodash.isempty'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { MouseEvent, useState } from 'react'
import { userStore } from '../../../entities/user/store'

import { ContextMenu } from '../ContextMenu/ContextMenu'
import { ContextMenuPosition } from '../ContextMenu/types'
import { ButtonsContextMenuConfig } from './config/ButtonsContextMenuConfig'
import styles from './Message.module.scss'
import { MessageProps } from './type'

const Message = observer(({ message }: MessageProps) => {
	const { entity: user } = userStore

	if (isEmpty(toJS(user))) return

	const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)

	return (
		<>
			<div
				className={
					styles.container +
					' ' +
					`${
						message.userId === user.id &&
						styles.currentUserContainer
					}`
				}
				onContextMenu={(e: MouseEvent<any>) => {
					e.preventDefault()
					setIsContextMenuOpen(prev => !prev)
				}}
			>
				<Avatar alt={message?.user?.nickname} sx={{ padding: '5px' }}>
					{message?.user?.nickname[0]}
				</Avatar>
				<span
					className={
						styles.message +
						' ' +
						`${
							message.userId === user.id
								? styles.currentUserMessage
								: styles.anotherUserMessage
						}`
					}
				>
					<ContextMenu
						isOpen={isContextMenuOpen}
						setIsOpen={setIsContextMenuOpen}
						buttons={ButtonsContextMenuConfig(message)}
						position={
							message.userId === user.id
								? ContextMenuPosition.right
								: ContextMenuPosition.left
						}
					/>
					{message.message}
				</span>
			</div>
		</>
	)
})

export default Message
