/* eslint-disable @typescript-eslint/no-empty-interface */

import 'styled-components'

import { Theme } from '@material-ui/core'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
