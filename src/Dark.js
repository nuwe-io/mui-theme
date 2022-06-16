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
        backgroundColor: '#5EBF0D',
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
    type: 'dark',
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    text: {
      primary: '#FFF',
      secondary: '#B5B5B5'
    },
    divider: '#404560',
    contrast: {
      main: '#6772E5'
    },
    primary: {
      light: '#9FE763',
      main: '#5EBF0D',
      dark: '#407D3C',
      contrastText: '#fff'
    },
    secondary: {
      light: '#A1AAFC',
      main: '#6772E5',
      dark: '#384085'
    },
    background: {
      default: '#0E0F16',
      paper: '#1C1D2B',
      border: '#404560'
    }
  },
  typography: {
    htmlFontSize: 16,
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
