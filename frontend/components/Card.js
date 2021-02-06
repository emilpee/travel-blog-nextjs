import Link from 'next/link'
import { Box } from '@chakra-ui/react'

const Card = (props) => {
  const { article } = props

  return (
    <Link href={`/posts/${article.slug}`}>
      <Box maxW="sm" margin="2" bg="gray.200" borderWidth="1px" borderRadius="md" overflow="hidden">
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
            {article.updated_at}
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default Card
