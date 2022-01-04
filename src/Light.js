const { ElevationConfig, TypographyConfig } = require('./General')

const Light = {
  overrides: {
    MuiDialog: {
      root: {
        backgroundColor: '#FFFFF',
        color: '#14151F'
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: '#FFFFFF',
        color: '#14151F',
        fontSize: 16
      },
      arrow: {
        color: '#E1E2E7'
      }
    },
    MuiPaper: {
      root: {
        border: '2px solid #E1E2E7'
      },
      outlined: {
        border: '2px solid #E1E2E7'
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
    type: 'light',
    divider: '#8B979D',
    common: {
      black: '#14151F',
      white: '#F5F5F5'
    },
    text: {
      primary: '#14151F',
      secondary: '#2D2F47',
      disabled: '#6B6C78',
      hint: '#ACAEBC'
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
      default: '#F5F5F5',
      paper: '#FFFFFF'
    },
    info: {
      main: '#E1E2E7',
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
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
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
}

module.exports = { Light }
