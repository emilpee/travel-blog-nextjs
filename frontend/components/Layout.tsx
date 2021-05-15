import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ChakraProvider } from '@chakra-ui/react'

const Layout = (props) => {
  const { children } = props

  return (
    <ChakraProvider>
      <Navbar />
      {children}
      <Footer />
    </ChakraProvider>
  )
}

export default Layout
