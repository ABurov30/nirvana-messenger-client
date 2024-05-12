//@ts-ignore
import React from 'react'

import { MessageProps } from './type'
import styles from './Message.module.scss'

function Message({ message, user }: MessageProps) {
	return (
		<div
			className={
				styles.container +
				' ' +
				`${message.userId === user.id && styles.currentUserContainer}`
			}
		>
			{/* <Avatar alt={user.nickname} sx={{ padding: '5px' }}>
				{user.nickname[0]}
			</Avatar> */}
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
				{message.message}
			</span>
		</div>
	)
}

export default Message
