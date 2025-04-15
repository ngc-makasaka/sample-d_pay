import cx from 'classnames'

import { InputProps } from '@/src/types/components/forms/input'

import styles from './Input.module.scss'

// TODO: react hook form
export const Input = ({
	type = 'text',
	active = false,
	...props
}: InputProps) => {
	return (
		<input
			type={type}
			className={cx(styles['input'], active && styles['active'])}
			{...props}
		/>
	)
}
