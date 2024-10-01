import isEmpty from 'lodash.isempty'
import { action, autorun, makeObservable, observable } from 'mobx'
import { io, Socket } from 'socket.io-client'
import { chatStore } from '../chat/store'
import { Chat } from '../chat/types'
import { Contact } from '../contact/types'
import { Message } from '../message/types'
import { userStore } from '../user/store'
import { ActiveUser } from '../user/types'
import { MenuMode, Process, SearchEntities } from './types'

class AppStore {
	input: string = ''
	process: Process = Process.none
	menuMode: MenuMode = MenuMode.chat
	activeChat: Chat = {} as Chat
	socket: Socket = io(import.meta.env.VITE_SOCKET_BASE_URL).connect()
	currentMessage: Message = {} as Message
	entityToUpdate: Entity = {} as Entity
	isModalOpen: boolean = false
	isInfoSectionOpen: boolean = false
	searchEntities: SearchEntities = { messages: [], chats: [], users: [] }
	constructor() {
		makeObservable(this, {
			input: observable,
			process: observable,
			currentMessage: observable,
			menuMode: observable,
			isInfoSectionOpen: observable,
			isModalOpen: observable,
			activeChat: observable,
			searchEntities: observable,
			entityToUpdate: observable,
			setEntityToUpdate: action,
			setIsModalOpen: action,
			setIsInfoSectionOpen: action,
			setMenuMode: action,
			setInput: action,
			setProcess: action,
			setCurrentMessage: action,
			setActiveChat: action,
			startAddMemberProcess: action,
			startUpdateContactProcess: action,
			startUpdateChatProcess: action,
			startUpdateMessageProcess: action,
			cancelProcess: action
		}),
			autorun(() => {
				this.socket.on('added members', async (data: Chat) => {
					try {
						const {
							updateChat,
							add: addChat,
							entities: chats
						} = chatStore

						if (isEmpty(data)) return

						const chatToUpdate = chats.find(
							chat => chat.id === data.id
						)

						if (chatToUpdate) {
							updateChat(data)
						}

						if (!chatToUpdate) addChat(data)
					} catch (e) {
						console.error(e)
					}
				})
			}),
			autorun(() => {
				this.socket.on(
					'deleted member',
					async (data: {
						updatedChat: Chat
						memberId: ActiveUser['id']
					}) => {
						try {
							const {
								updateChat,
								delete: deleteChat,
								entities: chats
							} = chatStore

							const { entity: user } = userStore

							if (isEmpty(data)) return

							if (data.memberId === user.id) {
								deleteChat(data?.updatedChat?.id)

								if (
									data.updatedChat.id === this.activeChat.id
								) {
									this.setActiveChat({} as Chat)
									this.setIsInfoSectionOpen(false)
								}
								return
							}

							const chatToUpdate = chats.find(
								chat => chat.id === data.updatedChat.id
							)

							if (chatToUpdate) {
								updateChat(data.updatedChat)
							}
						} catch (e) {
							console.error(e)
						}
					}
				)
			})
	}

	setEntityToUpdate = (data: Entity) => {
		this.entityToUpdate = data
	}
	setActiveChat = (data: Chat) => {
		this.activeChat = data
	}
	setInput = (data: string) => {
		this.input = data
	}
	setCurrentMessage = (data: Message) => {
		this.currentMessage = data
	}
	setProcess = (data: Process) => {
		this.process = data
	}
	setMenuMode = (data: MenuMode) => {
		this.menuMode = data
	}
	setIsInfoSectionOpen = (data: boolean) => {
		this.isInfoSectionOpen = data
	}
	setIsModalOpen = (data: boolean) => {
		this.isModalOpen = data
	}
	setSearchEntities = (data: SearchEntities) => {
		this.searchEntities = data
	}

	startUpdateContactProcess = (data: Contact) => {
		this.setIsModalOpen(true)
		this.setEntityToUpdate(data)
		this.setProcess(Process.editContact)
	}
	startAddMemberProcess = () => {
		this.setIsModalOpen(true)
		this.setEntityToUpdate([])
		this.setProcess(Process.addMember)
	}
	startUpdateChatProcess = (data: Chat) => {
		this.setIsModalOpen(true)
		this.setEntityToUpdate(data)
		this.setProcess(Process.editChat)
	}
	startUpdateMessageProcess = (message: Message) => {
		this.setInput(message.message)
		this.setProcess(Process.editMessage)
		this.setCurrentMessage(message)
	}
	cancelProcess = () => {
		this.setProcess(Process.none)
		this.setInput('')
		this.setEntityToUpdate({})
		this.setCurrentMessage({} as Message)
	}
}

export const appStore = new AppStore()
