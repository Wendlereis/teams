import { FC } from 'react'
import { ThemeProvider as StyledTheme } from 'styled-components'
import { ThemeProvider as MuiTheme, createMuiTheme, StylesProvider } from '@material-ui/core'

export const ThemeProvider: FC = ({ children }) => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Lato',
      h1: {
        fontSize: '48px',
        lineHeight: '52px',
        fontWeight: 900,
      },
      body1: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
      },
      button: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
        textTransform: 'capitalize',
      },
    },
    palette: {
      primary: {
        main: '#1b4965',
      },
      secondary: {
        main: '#5fa8d3',
      },
      background: {
        default: '#f2f2f2',
        paper: '#ffffff',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: '52px',
          padding: '12px 24px',
        },
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: '52px',
        },
      },
      MuiPaper: {
        rounded: {
          borderRadius: '16px',
        },
      },
    },
  })

  return (
    <StylesProvider injectFirst>
      <MuiTheme theme={theme}>
        <StyledTheme theme={theme}>{children}</StyledTheme>
      </MuiTheme>
    </StylesProvider>
  )
}
