import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import apolloClient from '../../api/apollo'
import { BlogPost } from '../../components/BlogPost'

const Post = ({ article }) => {
  console.log(article)
  const router = useRouter()
  const { post } = router.query
  return <BlogPost post={article} />
}

export async function getServerSideProps() {
  // Lös detta Emil! Hur få in ID?

  // const resolvers = {
  //   Query: {
  //     album (parent, args, context, info) {
  //       const { id } = args;
  //       return context.db.Albums.find((a) => a.id == id)
  //     }
  //   }
  // }

  const { data } = await apolloClient.query({
    query: gql`
      query Article {
        article(id: "2") {
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
