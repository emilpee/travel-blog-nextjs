import React from 'react'
import withApollo from '../api/apollo'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <>
      <Layout></Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Home)
