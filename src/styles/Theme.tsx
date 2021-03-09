import { FC } from 'react'
import { ThemeProvider as StyledTheme } from 'styled-components'
import { ThemeProvider as MuiTheme, createMuiTheme, StylesProvider } from '@material-ui/core'

export const ThemeProvider: FC = ({ children }) => {
  const theme = createMuiTheme({
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
  })

  return (
    <StylesProvider injectFirst>
      <MuiTheme theme={theme}>
        <StyledTheme theme={theme}>{children}</StyledTheme>
      </MuiTheme>
    </StylesProvider>
  )
}
