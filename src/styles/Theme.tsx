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
      },
      h2: {
        fontSize: '40px',
        lineHeight: '48px',
      },
      h3: {
        fontSize: '32px',
        lineHeight: '40px',
      },
      h4: {
        fontSize: '24px',
        lineHeight: '32px',
      },
      h5: {
        fontSize: '20px',
        lineHeight: '28px',
      },
      body1: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      body2: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      button: {
        fontSize: '16px',
        lineHeight: '24px',
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
      text: {
        primary: '#00000085',
        secondary: '#00000060',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: '8px',
        },
      },
      MuiOutlinedInput: {
        root: {
          borderRadius: '8px',
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
