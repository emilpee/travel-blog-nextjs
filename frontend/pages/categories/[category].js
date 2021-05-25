import { useRouter } from 'next/router'
import apolloClient from '../../api/apollo'
import { Heading, Stack, StackDivider, Container, Text } from '@chakra-ui/react'
import { BlogCards } from '../../components/BlogCards'
import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  {
    categories {
      id
      slug
      name
    }
  }
`

const CategoryPage = ({ articles }) => {
  const router = useRouter()
  const { category } = router.query
  const { loading, error, data } = useQuery(QUERY)
  if (error) return 'Error loading categories'
  if (loading) return <h1>Fetching</h1>

  const currentCategory = data.categories?.find((cat) => cat.slug === category)

  return currentCategory ? (
    <Container padding="4" bg="gray.50">
      <Stack alignItems="center" divider={<StackDivider borderColor="orange.200" />} spacing="1.6rem">
        <Heading margin="4">{currentCategory.name}</Heading>
        <BlogCards articles={articles} category={currentCategory} />
      </Stack>
    </Container>
  ) : (
    <Text>Loading...</Text>
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

export default CategoryPage
