import { configure, addDecorator } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

addDecorator(withNotes)

function loadStories() {
  require('../stories')
}

configure(loadStories, module)
