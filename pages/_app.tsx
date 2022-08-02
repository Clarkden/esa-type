/* eslint-disable */

import '../styles/index.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-[#131215] min-h-screen '>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
