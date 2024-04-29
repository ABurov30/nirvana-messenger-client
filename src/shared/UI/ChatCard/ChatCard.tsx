import React from 'react'
import { Typography } from 'nirvana-uikit'
import { ChatCardProps } from './type'
import styles from './ChatCard.module.scss'
import { Avatar } from '@mui/material'

function ChatCard({ nickname, lastMessage, isNewMessage }: ChatCardProps) {
	return (
		<div className={`${styles.chatCard}`}>
			<Avatar sx={{ padding: '5px' }} alt={nickname}>
				{nickname}
			</Avatar>
			<div className={styles.textContainer}>
				<div className={styles.nameContainer}>
					{nickname ? (
						<Typography
							text={`${nickname}`}
							fontSize="1.2em"
							weight="semibold"
						/>
					) : null}
				</div>
				<div className={styles.lastMessageContainer}>
					{lastMessage ? (
						<Typography
							text={lastMessage}
							fontSize="1em"
							weight="regular"
						/>
					) : null}
				</div>
			</div>
			{isNewMessage && <div className={styles.notification}></div>}
		</div>
	)
}

export default ChatCard
