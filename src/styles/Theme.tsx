import { FC } from 'react'

import { ThemeProvider as EmotionProvider } from '@emotion/react'

import { ThemeProvider as MuiTheme, createTheme } from '@mui/material'

export const ThemeProvider: FC = ({ children }) => {
  const theme = createTheme({
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
        default: '#fafafade',
        paper: '#ffffff',
      },
      text: {
        primary: '#00000085',
        secondary: '#00000060',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorDefault: {
            backgroundColor: '#ffffff',
            borderBottomColor: 'transparent',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRightColor: '#d3d3d333',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            color: 'inherit',
          },
          rounded: {
            borderRadius: '8px',
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            marginBottom: '8px',
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: '0px',
            marginRight: '16px',
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: 'md',
        },
      },
    },
  })

  return (
    <MuiTheme theme={theme}>
      <EmotionProvider theme={theme}>{children}</EmotionProvider>
    </MuiTheme>
  )
}
