import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Travel blog</title>
        </Head>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </>
    )
  }
}
export default MyApp
