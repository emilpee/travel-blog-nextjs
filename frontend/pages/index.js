import withApollo from '../api/apollo'
import { BlogCards } from '../components/BlogCards'
import { BlogContainer } from '../components/BlogContainer'
import Layout from '../components/Layout'

const Home = (props) => {
  return (
    <Layout>
      <BlogContainer children={<BlogCards />} />
    </Layout>
  )
}

export default withApollo({ ssr: true })(Home)
