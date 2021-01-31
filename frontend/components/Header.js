import { Heading, Center } from '@chakra-ui/react'

const Header = () => {
  return (
    <Center padding="4" color="white" bg="orange.300">
      <Heading as="h3" size="xl">
        Travel blog
      </Heading>
    </Center>
  )
}

export default Header
