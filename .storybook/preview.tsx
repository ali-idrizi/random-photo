import { Preview, StoryFn } from '@storybook/react'
import React from 'react'
import '../app/globals.css'
import { bodyFont, displayFont } from '../lib/utils/fonts'

const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Transitions', 'UI', 'Components', 'Layouts', 'Pages'],
    },
  },
  backgrounds: {
    default: 'sidebar',
    values: [
      {
        name: 'body',
        value: '#1e293b',
      },
      {
        name: 'sidebar',
        value: '#0f172a',
      },
      {
        name: 'header',
        value: '#020617',
      },
    ],
  },
  nextjs: {
    appDirectory: true,
  },
}

const withGlobalStyle = (Story: StoryFn) => {
  document.body.classList.add('font-body', 'text-white', bodyFont.variable, displayFont.variable)
  return <Story />
}

const preview: Preview = {
  decorators: [withGlobalStyle],
  parameters,
}

export default preview
