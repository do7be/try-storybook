import React from 'react'

import { HandlerFunction } from '@storybook/addon-actions'

interface Props {
  children: React.ReactNode
  onClick: HandlerFunction
}

export default function Button (props: Props) {
  return (
    <button type='button'>{props.children}</button>
  )
}
