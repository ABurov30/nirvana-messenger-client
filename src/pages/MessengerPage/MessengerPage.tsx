//@ts-ignore
import React, { useEffect } from 'react'
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
import { toJS } from 'mobx'

const MessengerPage = observer(() => {
	const { data, loading } = useQuery(GET_ALL_CHATS)
	const { entities: chatsList, set: setChatsList } = chatStore
	const { entities: messageList, add: addMessageList } = messageStore
	const { entity: userValue } = userStore

	console.log(toJS(messageList))

	useEffect(() => {
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
					chatsList.map(chat => (
						<ChatCard
							nickname={chat.name}
							lastMessage={chat.lastMessage}
							isCurrent={true}
							isNewMessage={true}
							key={chat.name + chat.lastMessage}
						/>
					))
				)}
			</ChatSection>
			<Chat
				messageList={messageList}
				addMessageList={addMessageList}
				userValue={userValue}
			/>
		</div>
	)
})

export default MessengerPage
