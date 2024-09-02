import CloseIcon from '@mui/icons-material/Close'
import { ButtonProps } from 'antd'
import styles from './Button.module.scss'

export const CancelButton = ({ onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<CloseIcon />
		</button>
	)
}
