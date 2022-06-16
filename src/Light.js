import { ElevationConfig, TypographyConfig } from './General'
import { createTheme, responsiveFontSizes } from '@material-ui/core'
import colors from './theme/Colors.json'

let theme = createTheme({
  overrides: {
    MuiDialog: {
      root: {
        backgroundColor: colors.light.background
      }
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: colors.light.paper,
        color: colors.dark.paper,
        fontSize: 16
      },
      arrow: {
        color: colors.light.border
      }
    },
    MuiPaper: {
      root: {
        border: `2px solid ${colors.light.border}`
      },
      outlined: {
        border: `2px solid ${colors.light.border}`
      },
      ...ElevationConfig
    },
    MuiButton: {
      root: {
        borderRadius: '5px',
        transition: 'all ease .3s',
        backgroundColor: colors.main.primary,
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
    common: {
      black: colors.dark.background,
      white: colors.light.background
    },
    text: {
      primary: colors.dark.background,
      secondary: colors.light.background
    },
    divider: colors.divider,

    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark
    },
    secondary: {
      light: colors.dark.border,
      main: colors.dark.paper,
      dark: colors.dark.background
    },
    info: {
      main: colors.info.main,
      dark: colors.info.dark
    },
    background: {
      default: colors.light.paper,
      paper: colors.light.background
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
})

theme = responsiveFontSizes(theme)

export default theme
