import React from 'react'

import { CardSectionProps } from './type'

import styles from './CardSection.module.scss'
import { observer } from 'mobx-react-lite'

const CardSection = observer(
	({ children, isNewMessage, isCurrent }: CardSectionProps) => {
		const childrenWithProps = React.Children.map(children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, {
					isNewMessage,
					isCurrent
				} as React.Attributes)
			}
			return child
		})
		return <div className={styles.CardSection}>{childrenWithProps}</div>
	}
)

export default CardSection
