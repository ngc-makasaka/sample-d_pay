export interface ButtonProps {
	label: string
	type?: 'button' | 'submit'
	onClick: () => void
	disabled?: boolean
	width?: 'full' | 'half'
	size?: 'large' | 'medium' | 'small'
	variant?: 'contained' | 'outlined'
	color?: 'primary' | 'white'
}
