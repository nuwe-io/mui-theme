import React from 'react'
import MuiProvider from '../Provider'
import { Dark, Light } from '../../theme'
import { PropTypes } from 'prop-types'
import { useTheme } from '../../hook'
import SwitchThemeView from './SwitchTheme.jsx'

/**
 * Toggle switch theme button
 * @returns {SwitchTheme}
 */
const SwitchTheme = ({ iconColor, iconWidth, color, variant }) => {
  const { theme, handlerChangeTheme } = useTheme()
  const handlerTheme = () => {
    if (theme?.palette?.type === 'dark') {
      handlerChangeTheme(Light, 'light')
    } else {
      handlerChangeTheme(Dark, 'dark')
    }
  }

  return (
    <MuiProvider>
      <SwitchThemeView
        variant={variant}
        iconColor={iconColor}
        iconWidth={iconWidth}
        color={color}
        theme={theme}
        handlerTheme={handlerTheme}
      />
    </MuiProvider>
  )
}

SwitchTheme.propTypes = {
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  iconColor: PropTypes.string,
  iconWidth: PropTypes.string
}

SwitchTheme.defaultProps = {
  variant: 'contained',
  iconColor: '#00000',
  color: 'primary',
  iconWidth: '30px'
}

export default SwitchTheme
