import React from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Travel Blog</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default withApollo({ ssr: true })(MyApp)
