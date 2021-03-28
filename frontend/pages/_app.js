import App from 'next/app'
import Head from 'next/head'
import withApollo from '../api/apollo'
import Layout from '../components/Layout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Travel blog</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default withApollo({ ssr: true })(MyApp)
