import { useEffect } from 'react'
import { AppProps } from 'next/app'

import { QueryCache, ReactQueryCacheProvider } from 'react-query'

import GlobalStyles from '../styles/Global'

const queryCache = new QueryCache()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles?.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ReactQueryCacheProvider>
  )
}

export default MyApp
