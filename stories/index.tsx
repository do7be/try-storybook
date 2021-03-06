import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button'

const stories = storiesOf('Button', module)

import { withNotes } from '@storybook/addon-notes'

stories.add('with text', withNotes('A very simple component')(() => (
  <Button onClick={action('clicked')}>Hello Button</Button>
)))

stories.add('with some emoji', () => (
  <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
), { notes: 'A very simple component 2' })

