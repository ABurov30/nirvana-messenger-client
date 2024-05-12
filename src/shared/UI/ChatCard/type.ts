import { ChatSectionProps } from "../ChatSection/type"


export interface ChatCardProps
	extends Partial<Pick<ChatSectionProps, 'isCurrent' | 'isNewMessage'>> {
	nickname: string
	lastMessage?: string
}
