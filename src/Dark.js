const { ElevationConfig, TypographyConfig } = require('./General')

const Dark = (type = 'type') => ({
  overrides: {
    MuiDialog: {
      root: {
        backgroundColor: '#1C1D2B'
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#1C1D2B',
        color: '#F5F5F5',
        fontSize: 16
      },
      arrow: {
        color: '#404560'
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
          transform: 'translateY(-5px)',
          backgroundColor: '#384085'
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
    [type]: 'dark',
    divider: '#8B979D',
    accent: '#404560',
    common: {
      black: '#14151F',
      white: '#F5F5F5'
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#D4D4D6',
      disabled: '#B6B6BA',
      hint: '#8B8B92'
    },
    primary: {
      light: '#A1AAFC',
      main: '#569B51',
      dark: '#384085'
    },
    secondary: {
      light: '#A1AAFC',
      main: '#6772E5',
      dark: '#384085'
    },
    background: {
      default: '#14151F',
      paper: '#1C1D2B'
    },
    info: {
      main: '#404560',
      contrastText: '#404560'
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

module.exports = { Dark }
