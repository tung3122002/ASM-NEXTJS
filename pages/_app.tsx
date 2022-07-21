import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <><Component {...pageProps} /><h1>maithanhduc</h1></>
}

export default MyApp
