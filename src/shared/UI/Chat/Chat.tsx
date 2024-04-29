import React, { useEffect, useState } from 'react'
import { Send } from '@mui/icons-material'

import ChatCard from '../ChatCard/ChatCard'
import Message from '../Message/Message'

import styles from './Chat.module.scss'

import { io } from 'socket.io-client'
import { messages } from '../../../entities/message/atom'
import { useAtom } from 'jotai'
import { user } from '../../../entities/user/atom'

const socket = io(import.meta.env.VITE_SOCKET_BASE_URL).connect()

function Chat() {
	const [input, setInput] = useState('')

	const [messageList, setMessageList] = useAtom(messages)
	const [userValue] = useAtom(user)

	useEffect(() => {
		socket.on('get message', data => {
			console.log('launch')
			setMessageList(prev => [
				...prev,
				{
					message: data.message,
					userId: data.userId,
					nickname: data.nickname
				}
			])
		})
	}, [socket])

	const sendMessage = (e: Event) => {
		e.preventDefault()
		socket.emit('send message', {
			message: input,
			userId: userValue.id,
			nickname: userValue.nickname
		})
		setMessageList(prev => [
			...prev,
			{
				message: input,
				userId: userValue.id,
				nickname: userValue.nickname
			}
		])
		setInput('')
	}

	return (
		<div className={styles.chat}>
			<div className={styles.header}>
				<ChatCard nickname={userValue.nickname} />
			</div>
			<div className={styles.chatHistory}>
				{messageList.map((message, i) => (
					<Message
						key={message.message + i + userValue.id}
						user={userValue}
						message={message}
					/>
				))}
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
