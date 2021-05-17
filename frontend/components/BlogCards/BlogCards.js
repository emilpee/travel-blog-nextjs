import { Card } from '../Card'
import { Container } from '@chakra-ui/react'

const BlogCards = ({ category, articles }) => {
  const filteredArticlesByCategory = articles.filter((article) => article.category?.id === category?.id)

  return (
    <Container bg="gray.50">
      {filteredArticlesByCategory.map((article) => {
        return <Card key={article.id} article={article}></Card>
      })}
    </Container>
  )
}

export default BlogCards
