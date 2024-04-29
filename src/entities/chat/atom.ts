import { atom } from 'jotai'
import { Chat } from './types'

export const chats = atom<Chat[]>([])
