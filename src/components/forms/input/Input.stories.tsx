import { Input } from '@/src/components/forms/input/Input'

import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Forms/Input',
	component: Input,

	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		value: { control: 'text' },
		placeholder: { control: 'text' },
		type: { control: 'select' },
		active: { control: 'boolean' },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const String: Story = {
	args: {
		value: 'value',
		placeholder: 'placeholder',
		type: 'text',
	},
}

export const Number: Story = {
	args: {
		value: '1',
		placeholder: 'placeholder',
		type: 'number',
	},
}
