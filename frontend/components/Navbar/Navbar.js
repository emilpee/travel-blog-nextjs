import { Box, Heading, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

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
  const [isMobile, setIsMobile] = useState(false)
  const smallScreen = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    if (smallScreen !== isMobile) {
      setIsMobile(smallScreen[0])
    }
  }, [isMobile, smallScreen])

  if (error) return 'Error loading categories'
  if (loading) return <h2>Fetching...</h2>

  return (
    <Box bg="orange.300" padding="1" color="white">
      <Flex alignItems={isMobile ? 'center' : 'flex-start'} direction={isMobile ? 'column' : 'row'}>
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
