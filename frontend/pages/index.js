import React from 'react'
import { BlogContainer, BlogCards, Navbar } from '../components'
import withApollo from '../api/apollo'
import { ChakraProvider } from '@chakra-ui/react'

const Home = (props) => {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <BlogContainer>
        <BlogCards />
      </BlogContainer>
    </ChakraProvider>
  )
}

export default withApollo({ ssr: true })(Home)
