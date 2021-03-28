import { Box, Heading, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
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

const Navbar = () => {
  const { loading, error, data } = useQuery(QUERY)

  if (error) return 'Error loading categories'
  if (loading) return <h2>Fetching...</h2>

  return (
    <Box bg="orange.300" padding="1" color="white">
      <Flex direction="row">
        <Heading padding="4" as="h3" size="xl">
          <Link href="/">Travel blog</Link>
        </Heading>
        <Flex grow="1" justify="flex-end">
          {data.categories.map((category) => {
            return (
              <Link key={category.id} href={`/categories/${category.slug}`}>
                <Text fontWeight="medium" margin="2" cursor="pointer">
                  {category.name}
                </Text>
              </Link>
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
