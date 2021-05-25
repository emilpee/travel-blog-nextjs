import { Card } from '../Card'
import { Container } from '@chakra-ui/react'

const BlogCards = ({ category, articles }) => {
  const filteredArticles = category ? articles?.filter((article) => article.category?.id === category.id) : articles

  return (
    <Container bg="gray.50">
      {filteredArticles.map((article) => {
        return <Card key={article.id} article={article}></Card>
      })}
    </Container>
  )
}

export default BlogCards
