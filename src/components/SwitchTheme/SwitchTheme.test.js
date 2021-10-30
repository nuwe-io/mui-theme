/* eslint-disable no-undef */

import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import SwitchTheme from './SwitchTheme'

test('renders content', () => {
  const component = render(<SwitchTheme />)
  console.log(component)
})
