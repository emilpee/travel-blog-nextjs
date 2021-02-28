import React from 'react'
import { BlogContainer, BlogCards, Navbar } from '../components'
import withApollo from '../api/apollo'
import { ChakraProvider } from '@chakra-ui/react'

const Home = (props) => {
  console.log(props)
  return (
    <>
      <Navbar></Navbar>
      <BlogContainer>
        <BlogCards />
      </BlogContainer>
    </>
  )
}

export default withApollo()(Home)
