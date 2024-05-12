//@ts-ignore
import React, { useEffect, useLayoutEffect } from 'react'
import styles from './Messenger.module.scss'
import ChatCard from '../../shared/UI/ChatCard/ChatCard'
import ChatSection from '../../shared/UI/ChatSection/ChatSection'
import Chat from '../../shared/UI/Chat/Chat'
import { useQuery } from '@apollo/client'
import { GET_ALL_CHATS } from '../../entities/chat/query'
import { Spin } from 'antd'
import { observer } from 'mobx-react-lite'
import { chatStore } from '../../entities/chat/store'
import { messageStore } from '../../entities/message/store'
import { userStore } from '../../entities/user/store'
import { UserStatus } from '../../entities/user/types'

const MessengerPage = observer(() => {
	const { data, loading } = useQuery(GET_ALL_CHATS)
	const {
		entities: chatsList,
		set: setChatsList,
		update: updateChatsList,
		activeChat,
		setActiveChat
	} = chatStore
	const {
		entities: messageList,
		add: addMessageList,
		set: setMessageList
	} = messageStore
	const { entity: userValue, set: setUser } = userStore

	useEffect(() => {
		setUser({
			email: 'admin@nirvana',
			nickname: 'admin',
			id: '35684199-e068-4e17-953a-7b2da51997f9',
			confirmed: true,
			isAdmin: true,
			status: UserStatus.active
		})
	}, [])

	useLayoutEffect(() => {
		if (!loading) {
			setChatsList(data?.queryChats?.chats)
		}
	}, [data])

	return (
		<div className={styles.container}>
			<ChatSection>
				{loading ? (
					<Spin />
				) : (
					chatsList.map(chat => {
						return (
							<ChatCard
								chat={chat}
								activeChat={activeChat}
								key={chat.name + chat.lastMessage}
								setActiveChat={setActiveChat}
								setMessageList={setMessageList}
								updateChatsList={updateChatsList}
							/>
						)
					})
				)}
			</ChatSection>
			<Chat
				messageList={messageList}
				activeChat={activeChat}
				addMessageList={addMessageList}
				userValue={userValue}
				updateChatsList={updateChatsList}
			/>
		</div>
	)
})

export default MessengerPage
