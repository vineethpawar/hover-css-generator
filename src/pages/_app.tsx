import Footer from '@/components/Footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.className} flex flex-1 flex-col h-screen insetShadow`}>
      <div className="flex flex-1 h-full">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main >
  )
}
