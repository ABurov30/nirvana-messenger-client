//@ts-nocheck
import SearchIcon from '@mui/icons-material/Search'
import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { useEffect, useState } from 'react'
import { appStore } from '../../../../../../entities/app/store'
import { DownArrowButton } from '../../../../../../shared/UI/Buttons/DownArrowButton'
import { UpArrowButton } from '../../../../../../shared/UI/Buttons/UpArrowButton'
import { Card } from '../../../../../../shared/UI/Card/Card'
import { onChatSelection } from '../ChatList/handlers/onChatSelection'
import styles from './SearchList.module.scss'

import { t } from 'i18next'
import { ContextMenu } from '../../../../../../shared/UI/ContextMenu/ContextMenu'
import { ButtonsContextMenuConfig } from './config/ButtonContextMenuConfig'
import { getSearchEntities } from './handlers/getSearchEntities'

const SearchList = observer(() => {
	const [input, setInput] = useState('')
	const { searchEntities, setSearchEntities } = appStore

	const [isExpanded, setIsExpanded] = useState({
		chats: false,
		messages: false,
		users: false
	})

	useEffect(() => {
		if (!input) return
		const id = setTimeout(() => {
			getSearchEntities(input)
		}, 100)
		return () => {
			clearTimeout(id)
		}
	}, [input])

	useEffect(() => {
		return () => {
			setSearchEntities({})
		}
	}, [])
	return (
		<>
			<div className={styles.inputContainer}>
				<SearchIcon />
				<input
					className={styles.input}
					value={input}
					onChange={e => setInput(e.target.value)}
				/>
			</div>
			<div className={styles.expandableSection}>
				{searchEntities.chats?.length ? (
					<div className={styles.firstRowInExpandableSection}>
						<Typography text={t('chats')} />
						{isExpanded.chats ? (
							<UpArrowButton
								onClick={() =>
									setIsExpanded(prev => {
										return {
											...prev,
											chats: false
										}
									})
								}
							/>
						) : (
							<DownArrowButton
								onClick={() =>
									setIsExpanded(prev => {
										return {
											...prev,
											chats: true
										}
									})
								}
							/>
						)}
					</div>
				) : null}
				{isExpanded.chats &&
					searchEntities.chats?.map(chat => {
						return (
							<Card
								title={chat.name}
								key={chat.id}
								onSelection={() => onChatSelection(chat)}
							/>
						)
					})}
			</div>
			<div className={styles.expandableSection}>
				{searchEntities.messages?.length ? (
					<div className={styles.firstRowInExpandableSection}>
						<Typography text={t('messages')} />
						{isExpanded.messages ? (
							<UpArrowButton
								onClick={() =>
									setIsExpanded(prev => {
										return {
											...prev,
											messages: false
										}
									})
								}
							/>
						) : (
							<DownArrowButton
								onClick={() =>
									setIsExpanded(prev => {
										return {
											...prev,
											messages: true
										}
									})
								}
							/>
						)}
					</div>
				) : null}
				{isExpanded.messages &&
					searchEntities.messages?.map(message => {
						return <Card title={message.message} key={message.id} />
					})}
			</div>
			<div className={styles.expandableSection}>
				{searchEntities.users?.length ? (
					<div className={styles.firstRowInExpandableSection}>
						<Typography text={t('users')} />
						{isExpanded.users ? (
							<UpArrowButton
								onClick={() =>
									setIsExpanded(prev => {
										return {
											...prev,
											users: false
										}
									})
								}
							/>
						) : (
							<DownArrowButton
								onClick={() =>
									setIsExpanded(prev => {
										return {
											...prev,
											users: true
										}
									})
								}
							/>
						)}
					</div>
				) : null}
				{isExpanded.users &&
					searchEntities.users?.map(user => {
						return (
							<Card
								title={user.nickname}
								key={user.id}
								entity={user}
							>
								<ContextMenu
									buttons={ButtonsContextMenuConfig(user)}
								/>
							</Card>
						)
					})}
			</div>
		</>
	)
})

export default SearchList
