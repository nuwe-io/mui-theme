import React from 'react'
import MuiProvider from '../Provider'
import { Dark, Light } from '../../theme'
import { PropTypes } from 'prop-types'
import { useTheme } from '../../hook'
import SwitchThemeView from './SwitchTheme.jsx'

/**
 * React version of reaload a page
 * @param {*} toReload
 * @returns
 */
const reloadWindow = (toReload) => window.location.reload(toReload)

/**
 * Toggle switch theme button
 * @returns {SwitchTheme}
 */
const SwitchTheme = ({ iconColor, iconWidth, color, variant, reload, hasToReload }) => {
  const { theme, handlerChangeTheme } = useTheme()
  const handlerTheme = () => {
    if (theme?.palette?.type === 'dark') {
      handlerChangeTheme(Light, 'light', reload(hasToReload))
    } else {
      handlerChangeTheme(Dark, 'dark', reload(hasToReload))
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
  reload: PropTypes.func.isRequired,
  iconWidth: PropTypes.string,
  hasToReload: PropTypes.bool
}

SwitchTheme.defaultProps = {
  variant: 'contained',
  reload: reloadWindow,
  hasToReload: false,
  iconColor: '#00000',
  color: 'primary',
  iconWidth: '30px'
}

// displayName HOC
SwitchTheme.displayName = 'SwitchTheme'
export default SwitchTheme
