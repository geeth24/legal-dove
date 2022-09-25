import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { theme } from '../theme'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
