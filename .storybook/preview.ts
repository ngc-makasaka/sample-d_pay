import type { Preview } from '@storybook/react'

import '@/styles/globals.scss'
import '@/styles/storybook.scss'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
