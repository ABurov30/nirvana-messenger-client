import { action, makeObservable, observable } from 'mobx'
import { io, Socket } from 'socket.io-client'
import { Chat } from '../chat/types'
import { Message } from '../message/types'
import { MenuMode, Process, SearchEntities } from './types'

class AppStore {
	input: string = ''
	process: Process = Process.none
	menuMode: MenuMode = MenuMode.chat
	activeChat: Chat = {} as Chat
	socket: Socket = io(import.meta.env.VITE_SOCKET_BASE_URL).connect()
	currentMessage: Message = {} as Message
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
			searchEntities: observable,
			setIsModalOpen: action,
			setIsInfoSectionOpen: action,
			setMenuMode: action,
			setInput: action,
			setProcess: action,
			setCurrentMessage: action
		})
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
}

export const appStore = new AppStore()
