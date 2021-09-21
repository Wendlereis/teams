import { ThemeProvider } from '../../src/styles/Theme'

export function withThemeProvider(children: React.ReactNode): JSX.Element {
  return <ThemeProvider>{children}</ThemeProvider>
}
