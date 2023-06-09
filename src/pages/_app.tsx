import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {LayoutWrapper} from "@/layout/LayoutWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper >
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}
