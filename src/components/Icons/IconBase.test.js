/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import IconBase from './IconBase'

describe('IconBase', () => {
  test('Render its children', () => {
    const component = render(
      <IconBase>
        <div aria-label="icon-base-children" />
      </IconBase>
    )
    component.getByLabelText('icon-base-children')
  })
})
