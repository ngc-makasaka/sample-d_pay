import cx from 'classnames'

import { ButtonProps } from '@/src/types/components/common/button'

import styles from './Button.module.scss'

// Start of Selection
export const Button = ({
	type = 'button',
	onClick,
	width = 'full',
	variant = 'contained',
	disabled = false,
	size = 'medium',
	...props
}: ButtonProps) => {
	return (
		<button
			className={cx(
				styles['button'],
				styles[`${width}`],
				styles[`${variant}`],
				styles[`${size}`],
				disabled && styles['disabled']
			)}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{props.label}
		</button>
	)
}
