import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import apolloClient from '../../api/apollo'
import { BlogPost } from '../../components/BlogPost'

const Post = ({ article }) => {
  const router = useRouter()
  const { post } = router.query
  return <BlogPost post={article} />
}

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query Article {
        article(id: 1) {
          id
          slug
          title
          description
          updated_at
          category {
            id
            name
          }
          image {
            url
            alternativeText
          }
        }
      }
    `,
  })

  return {
    props: {
      article: data.article,
    },
  }
}

export default Post
