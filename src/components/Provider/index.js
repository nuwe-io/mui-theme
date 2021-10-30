import React from 'react'
import { ThemeProvider, StylesProvider, CssBaseline } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { useTheme } from '../../hook'
import './style.css'

const MuiProvider = (props) => {
  const { theme } = useTheme(0)

  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StylesProvider>
  )
}

MuiProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default MuiProvider
