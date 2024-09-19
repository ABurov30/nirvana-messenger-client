import AddIcon from '@mui/icons-material/Add'
import { ButtonProps } from 'antd'
import styles from './Button.module.scss'

export const AddButton = ({ onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<AddIcon />
		</button>
	)
}
