// import '~/styles/global.css'
import type { AppProps } from 'next/app'
import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import { lazy } from 'react'
import ContextProvider from '@/context/ContextProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'node_modules/swiper/swiper-bundle.min.css'
import 'tiny-slider/dist/tiny-slider.css'
import '@/vendors/animate/animate.min.css'
import '@/vendors/animate/custom-animate.css'
import '@/vendors/fontawesome/css/all.min.css'
import '@/vendors/tevily-icons/style.css'
import '@/vendors/reey-font/stylesheet.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-rangeslider/lib/index.css'

import '@/styles/globals.css'
import '@/styles/tevily.css'
import '@/styles/tevily-responsive.css'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

const mono = IBM_Plex_Mono({
  variable: '--font-family-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const sans = Inter({
  variable: '--font-family-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

const serif = PT_Serif({
  variable: '--font-family-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-family-sans: ${sans.style.fontFamily};
            --font-family-serif: ${serif.style.fontFamily};
            --font-family-mono: ${mono.style.fontFamily};
          }
        `}
      </style>
      <ContextProvider>
        {draftMode ? (
          <PreviewProvider token={token}>
            <Component {...pageProps} />
          </PreviewProvider>
        ) : (
          <Component {...pageProps} />
        )}
      </ContextProvider>
    </>
  )
}
