import { ChatSectionProps } from '../../Sections/ChatSection/type'

export interface ChatCardProps
	extends Partial<Pick<ChatSectionProps, 'isCurrent' | 'isNewMessage'>> {
	nickname: string
	lastMessage?: string
}
