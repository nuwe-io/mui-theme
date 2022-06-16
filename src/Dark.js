const { ElevationConfig, TypographyConfig } = require('./General')

const Dark = {
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
    divider: '#8B979D',
    common: {
      black: '#000000',
      white: '#ffffff'
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
      dark: '#407D3C'
    },
    secondary: {
      light: '#A1AAFC',
      main: '#6772E5',
      dark: '#384085'
    },
    background: {
      default: '#0E0F16',
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
}

module.exports = { Dark }
