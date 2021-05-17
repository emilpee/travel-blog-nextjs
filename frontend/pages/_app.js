import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'
import apolloClient from '../api/apollo'
import Layout from '../components/Layout'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Travel blog</title>
      </Head>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  )
}

export default App
