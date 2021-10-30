import React from 'react'
import { render } from '@testing-library/react'
import MuiProvider from './index'

describe('Provider', () => {
  test('must render its children', () => {
    const component = render(
      <MuiProvider>
        <div>Hello</div>
      </MuiProvider>
    )
    component.getByText('Hello')
  })
})
