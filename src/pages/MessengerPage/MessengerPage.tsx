import React, { useEffect } from 'react'
import styles from './Messenger.module.scss'
import ChatCard from '../../shared/UI/ChatCard/ChatCard'
import ChatSection from '../../shared/UI/ChatSection/ChatSection'
import Chat from '../../shared/UI/Chat/Chat'
import { useQuery } from '@apollo/client'
import { GET_ALL_CHATS } from '../../entities/chat/query'
import { useAtom } from 'jotai'
import { chats } from '../../entities/chat/atom'
import { Spin } from 'antd'

function MessengerPage() {
	const { data, loading } = useQuery(GET_ALL_CHATS)
	const [chatsList, setChatsList] = useAtom(chats)

	useEffect(() => {
		if (!loading) {
			console.log(data)
			setChatsList(data.queryChats.chats)
			console.log(chatsList)
		}
	}, [data])
	console.log(chatsList)
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
						/>
					))
				)}
			</ChatSection>
			<Chat />
		</div>
	)
}

export default MessengerPage
