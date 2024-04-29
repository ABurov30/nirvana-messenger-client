import React from 'react'

import { ChatSectionProps } from './type'

import styles from './ChatSection.module.scss'

export default function ChatSection({
	children,
	isNewMessage,
	isCurrent
}: ChatSectionProps) {
	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {
				isNewMessage,
				isCurrent
			} as React.Attributes)
		}
		return child
	})
	return <div className={styles.ChatSection}>{childrenWithProps}</div>
}
