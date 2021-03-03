import Document, { DocumentContext, DocumentInitialProps } from 'next/document'

import { ServerStyleSheet as StyledComponentsSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiSheets } from '@material-ui/core/styles'
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const styledComponentSheets = new StyledComponentsSheets()
    const materialUiSheets = new MaterialUiSheets()

    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => styledComponentSheets.collectStyles(materialUiSheets.collect(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheets.getStyleElement()}
          </>,
        ],
      }
    } finally {
      styledComponentSheets.seal()
    }
  }
}
