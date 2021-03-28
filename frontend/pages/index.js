import { Heading, Stack, StackDivider, Container } from '@chakra-ui/react'
import { BlogCards } from '../components/BlogCards'

const Home = () => {
  return (
    <Container padding="4" bg="gray.50">
      <Stack alignItems="center" divider={<StackDivider borderColor="orange.200" />} spacing="1.6rem">
        <Heading margin="4">All posts</Heading>
        <BlogCards />
      </Stack>
    </Container>
  )
}

export default Home
