import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
// import { withApollo } from 'next-apollo'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${API_URL}/graphql`,
  }),
  cache: new InMemoryCache(),
})

export default apolloClient
