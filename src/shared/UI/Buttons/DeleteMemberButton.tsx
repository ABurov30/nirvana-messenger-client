import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import { ButtonProps } from 'antd'
import styles from './Button.module.scss'

export const DeleteMemberButton = ({ onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<PersonRemoveIcon />
		</button>
	)
}
