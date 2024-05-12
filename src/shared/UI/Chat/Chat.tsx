//@ts-nocheck
import React, { MouseEvent, useEffect, useState } from 'react'
import { Send } from '@mui/icons-material'

import ChatCard from '../ChatCard/ChatCard'
import Message from '../Message/Message'

import styles from './Chat.module.scss'

import { io } from 'socket.io-client'
import { messages } from '../../../entities/message/atom'
import { user } from '../../../entities/user/store'
import { ChatProps } from './type'
import { Avatar } from '@mui/material'
import { Typography } from 'nirvana-uikit'

const socket = io(import.meta.env.VITE_SOCKET_BASE_URL).connect()

function Chat({
	messageList,
	activeChat,
	addMessageList,
	updateChatsList,
	userValue
}: ChatProps) {
	const [input, setInput] = useState('')
	console.log(activeChat)

	useEffect(() => {
		socket.on('get message', data => {
			addMessageList({
				message: data.message,
				userId: data.userId,
				chatId: data.chatId
			})
			updateChatsList({
				...activeChat,
				messages: [
					...activeChat?.messages,
					{
						message: data.message,
						userId: data.userId,
						chatId: data.chatId
					}
				]
			})
		})
	}, [socket])

	const sendMessage = (e: MouseEvent) => {
		e.preventDefault()
		socket.emit('send message', {
			message: input,
			userId: userValue?.id,
			chatId: activeChat?.id
		})
		addMessageList({
			message: input,
			userId: userValue?.id,
			chatId: activeChat?.id
		})
		updateChatsList({
			...activeChat,
			messages: [
				...activeChat?.messages,
				{
					message: input,
					userId: userValue?.id,
					chatId: activeChat?.id
				}
			]
		})
		setInput('')
	}

	return (
		<div className={styles.chat}>
			<div className={styles.header}>
				<Avatar sx={{ padding: '5px' }} alt={activeChat?.name}>
					{activeChat?.name}
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
				{messageList?.length
					? messageList?.map((message, i) => (
							<Message
								key={message.message + i + userValue.id}
								user={userValue}
								message={message}
							/>
					  ))
					: null}
			</div>
			<div className={styles.formContainer}>
				<form className={styles.form}>
					<div className={styles.inputContainer}>
						<input
							className={styles.input}
							value={input}
							onChange={e => setInput(e.target.value)}
						/>
						<button
							type="submit"
							className={styles.button}
							onClick={e => sendMessage(e)}
						>
							<Send />
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Chat
