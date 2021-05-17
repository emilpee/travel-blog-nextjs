import { Heading, Stack, StackDivider, Container } from '@chakra-ui/react'
import apolloClient from '../api/apollo'
import { BlogCards } from '../components/BlogCards'
import { gql } from '@apollo/client'

const Home = ({ articles }) => {
  return (
    <Container padding="4" bg="gray.50">
      <Stack alignItems="center" divider={<StackDivider borderColor="orange.200" />} spacing="1.6rem">
        <Heading margin="4">All posts</Heading>
        <BlogCards articles={articles} />
      </Stack>
    </Container>
  )
}

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query Articles {
        articles {
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
      articles: data.articles,
    },
  }
}

export default Home
