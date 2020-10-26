import { AppProps } from 'next/app'
import GlobalStyles from '../styles/Global'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

const queryCache = new QueryCache()

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ReactQueryCacheProvider>
  )
}

export default MyApp
