import { createTheme, responsiveFontSizes } from '@material-ui/core'
import { ElevationConfig, TypographyConfig } from './Components'

const dialogBgColor = '#1C1D2B'

let theme = createTheme({
  overrides: {
    MuiDialog: {
      root: {
        backgroundColor: dialogBgColor
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#1C1D2B',
        color: '#F0F0F0',
        fontSize: 16
      },
      arrow: {
        color: '#1C1D2B'
      }
    },
    MuiPaper: {
      root: {
        border: '2px solid #404560'
      },
      outlined: {
        border: '2px solid #404560'
      },
      ...ElevationConfig
    },
    MuiButton: {
      root: {
        borderRadius: '5px',
        transition: 'all ease .3s',
        '&:hover': {
          transform: 'translateY(-5px)'
        }
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      }
    }
  },
  palette: {
    common: {
      black: '#1B1D29',
      white: '#EEEEEE'
    },
    text: {
      primary: '#FFF',
      secondary: '#B5B5B5'
    },
    divider: '#8B979DA6',
    type: 'dark',
    contrast: {
      main: '#6772E5'
    },
    primary: {
      light: '#4F934A',
      main: '#569B51',
      dark: '#4F934A'
    },
    secondary: {
      light: '#FFF',
      main: '#FCFCFC',
      dark: '#CDCDCD'
    },
    background: {
      default: '#14151F',
      paper: '#1C1D2B',
      border: '#404560'
    }
  },
  typography: {
    htmlFontSize: 18,
    ...TypographyConfig
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'p',
        body2: 'p'
      }
    }
  },
  shape: {
    borderRadius: 5
  }
})

theme = responsiveFontSizes(theme)

export default theme
