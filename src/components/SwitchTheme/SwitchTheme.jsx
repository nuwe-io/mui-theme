/* eslint-disable multiline-ternary */
import React from 'react'
import { Button } from '@material-ui/core'
import { IconMoon, IconSun } from '../Icons/index'
import { PropTypes } from 'prop-types'

/**
 * Dummy view for the switch theme button
 * @returns {SwitchThemeView}
 */
const SwitchThemeView = ({ iconColor, iconWidth, color, theme, handlerTheme, variant }) => {
  return (
    <div>
      <Button aria-label="switchButton" color={color} variant={variant} onClick={handlerTheme}>
        {theme?.palette?.type === 'dark' ? (
          <IconSun width={iconWidth} color={iconColor} />
        ) : (
          <IconMoon color={iconColor} width={iconWidth} />
        )}
      </Button>
    </div>
  )
}

SwitchThemeView.displayName = 'SwitchThemeView'

SwitchThemeView.propTypes = {
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  theme: PropTypes.object.isRequired,
  handlerTheme: PropTypes.func.isRequired,
  iconColor: PropTypes.string,
  iconWidth: PropTypes.string
}

export default SwitchThemeView
