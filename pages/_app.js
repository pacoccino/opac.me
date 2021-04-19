import '../styles/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config as faConfig } from '@fortawesome/fontawesome-svg-core'
faConfig.autoAddCss = false

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
