import { Box, Heading, Center, Text } from '@chakra-ui/react'
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
    <Box bg="orange.300" color="white">
      <Center padding="4">
        <Heading as="h3" size="xl">
          Travel blog
        </Heading>
      </Center>
      <Center display="flex" bg="gray.600">
        {data.categories.map((category) => {
          return (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <Text margin="2" cursor="pointer">
                {category.name}
              </Text>
            </Link>
          )
        })}
      </Center>
    </Box>
  )
}

export default Navbar
