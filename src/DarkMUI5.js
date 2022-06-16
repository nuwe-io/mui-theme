import { ElevationConfig, TypographyConfig } from './General'

const DarkV5 = createThemeV5({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: '#151845',
          border: 'none'
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#151845',
          color: '#F5F5F5',
          fontSize: 16
        },
        arrow: {
          color: '#404560'
        }
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
      styleOverrides: {
        root: {
          fontSize: 11
        },
        contained: {
          backgroundColor: '#5EBF0D',
          color: '#F5F5F5',
          boxShadow: 'none',
          fontSize: 11,
          '&:hover': {
            backgroundColor: '#5EBF0D',
            color: '#F5F5F5'
          }
        }
      }
    }
  },
  palette: {
    mode: 'dark',
    divider: '#bdbdbd',
    accent: '#404560',
    common: {
      black: '#040835',
      white: '#F5F5F5'
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#D4D4D6',
      disabled: '#B6B6BA',
      hint: '#8B8B92'
    },
    primary: {
      light: '#9FE763',
      main: '#5EBF0D',
      dark: '#407D3C',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#A1AAFC',
      main: '#6772E5',
      dark: '#384085',
      contrastText: '#ffffff'
    },
    background: {
      default: '#040835',
      paper: '#151845'
    },
    info: {
      light: '#a7ffeb',
      main: '#26a69a',
      dark: '#1976d2',
      contrastText: '#040835'
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

module.exports = { DarkV5 }
