import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import styles from './Button.module.scss'
import { ButtonProps } from './types'

export const DownArrowButton = ({ onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<KeyboardArrowDownIcon />
		</button>
	)
}
