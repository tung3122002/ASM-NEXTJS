import '../styles/globals.css'
import { AppPropsWithLayout } from '../models/layout'
import Layout from '../components/Layout';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
config.autoAddCss = false
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (<LayoutWrapper><Component {...pageProps} /></LayoutWrapper>)
}

export default MyApp
