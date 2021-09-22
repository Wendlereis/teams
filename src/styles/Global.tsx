import { Global, css } from '@emotion/react'

const Styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const GlobalStyles = (): JSX.Element => <Global styles={Styles} />

export default GlobalStyles
