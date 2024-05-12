//@ts-ignore
import React from 'react'
import { Typography } from 'nirvana-uikit'
import { ChatCardProps } from './type'
import styles from './ChatCard.module.scss'
import { Avatar } from '@mui/material'
import { onChatSelection } from './handlers/onChatSelection'

function ChatCard({
	chat,
	activeChat,
	setActiveChat,
	setMessageList,
	updateChatsList
}: ChatCardProps) {
	return (
		<div
			className={`${styles.chatCard} ${
				chat?.id === activeChat?.id && styles.currentChatCard
			}`}
			onClick={() =>
				onChatSelection({
					chat,
					setActiveChat,
					setMessageList,
					updateChatsList
				})
			}
		>
			<Avatar sx={{ padding: '5px' }} alt={chat?.name}>
				{chat?.name}
			</Avatar>
			<div className={styles.textContainer}>
				<div className={styles.nameContainer}>
					{chat?.name ? (
						<Typography
							text={chat?.name}
							fontSize="1.2em"
							weight="semibold"
						/>
					) : null}
				</div>
				<div className={styles.lastMessageContainer}>
					{chat?.lastMessage ? (
						<Typography
							text={chat?.lastMessage}
							fontSize="1em"
							weight="regular"
						/>
					) : null}
				</div>
			</div>
			{chat?.isNewMessage && <div className={styles.notification}></div>}
		</div>
	)
}

export default ChatCard
