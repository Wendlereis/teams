import Head from 'next/head'
import { AppProps } from 'next/app'

import createCache from '@emotion/cache'
import { CacheProvider, EmotionCache } from '@emotion/react'

import { QueryCache, ReactQueryCacheProvider } from 'react-query'

import AuthProvider from '../context/auth'

import { ThemeProvider } from '../styles/Theme'
import GlobalStyles from '../styles/Global'

const queryCache = new QueryCache()

const clientSideEmotionCache = createCache({ key: 'css' })

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: React.FC<MyAppProps> = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head key="custom-head">
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <ReactQueryCacheProvider queryCache={queryCache}>
        <ThemeProvider>
          <AuthProvider>
            <GlobalStyles />
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </ReactQueryCacheProvider>
    </CacheProvider>
  )
}

export default MyApp
