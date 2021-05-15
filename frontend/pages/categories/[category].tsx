import { useRouter } from 'next/router'
import { Heading, Stack, StackDivider, Container } from '@chakra-ui/react'
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

const CategoryPage = () => {
  const router = useRouter()
  const { category } = router.query
  const { loading, error, data } = useQuery(QUERY)
  if (error) return 'Error loading categories'
  if (loading) return <h1>Fetching</h1>

  const currentCategory = data.categories.find((cat) => cat.slug === category)

  return (
    <Container padding="4" bg="gray.50">
      <Stack alignItems="center" divider={<StackDivider borderColor="orange.200" />} spacing="1.6rem">
        <Heading margin="4">{currentCategory.name}</Heading>
        <BlogCards category={currentCategory} />
      </Stack>
    </Container>
  )
}

export default CategoryPage
