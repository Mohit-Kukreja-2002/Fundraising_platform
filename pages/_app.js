import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
// import {} from '@next/font/google'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}
