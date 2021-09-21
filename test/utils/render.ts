import { render } from '@testing-library/react'

import { withAuthProvider } from '../providers/auth'
import { withThemeProvider } from '../providers/theme'

function teamsRender(component: React.ReactNode): void {
  render(withThemeProvider(withAuthProvider(component)))
}

export default teamsRender
