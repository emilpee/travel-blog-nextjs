import Link from 'next/link'
import { Box, Image, Text } from '@chakra-ui/react'

const Card = (props) => {
  const { article } = props

  return (
    <Link href={`/posts/${article.slug}`}>
      <Box cursor="pointer" marginTop="4" bg="gray.200" borderWidth="1px" borderRadius="md" overflow="hidden">
        <Image src={`http://localhost:1337${article.image.url}`} alt={article.image.alternativeText} />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            ></Box>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {article.title}
          </Box>

          <Box>{article.description}</Box>

          <Box as="span" color="gray.600" fontSize="sm">
            <Text>Updated at {article.updated_at}</Text>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default Card
