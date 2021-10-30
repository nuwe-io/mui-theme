/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import SwitchThemeView from './SwitchTheme.jsx'

describe('<SwitchTheme />', () => {
  let component
  const mockHandleTheme = jest.fn()
  const theme = jest.mock('../../hook', () => {
    return { useTheme: jest.fn(() => ({ handleTheme: mockHandleTheme })) }
  })

  beforeEach(() => {
    component = render(<SwitchThemeView theme={theme} handlerTheme={mockHandleTheme} />)
  })

  test('Renders SwitchThemeView content', () => {
    const button = component.getByLabelText('switchButton')
    fireEvent.click(button)
    expect(mockHandleTheme).toHaveBeenCalledTimes(1)
  })
})
