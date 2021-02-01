import { Box, Heading, Center } from '@chakra-ui/react'
import Link from 'next/link'

const Navbar = ({ categories }) => {
  console.log(categories)
  return (
    <>
      <Center padding="4" color="white" bg="orange.300">
        <Heading as="h3" size="xl">
          Travel blog
        </Heading>
      </Center>
      <Center>
        {categories.map((category) => {
          return (
            <Link id={category.id} href={category.slug}>
              <a>{category.name}</a>
            </Link>
          )
        })}
      </Center>
    </>
  )
}

export default Navbar
