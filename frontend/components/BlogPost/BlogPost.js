import { Box, Heading, Text } from '@chakra-ui/react'

const BlogPost = ({ post }) => {
  return (
    <Box padding="2" color="black">
      <Heading>{post.title}</Heading>
      <Text>{post.description}</Text>
    </Box>
  )
}

export default BlogPost
