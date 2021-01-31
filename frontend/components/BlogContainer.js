import { Container } from '@chakra-ui/react'

const BlogContainer = (props) => {
  return (
    <Container maxWidth="960px" padding="4" bg="gray.50" centerContent>
      {props.children}
    </Container>
  )
}

export default BlogContainer
