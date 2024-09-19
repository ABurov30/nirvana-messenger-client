import { ReactNode } from 'react'

export interface CardProps {
	title: string
	subtitle?: string
	onSelection?: () => void
	entity?: Entity
	activeEntity?: Entity
	children?: ReactNode
}
