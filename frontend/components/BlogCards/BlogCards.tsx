import { Card } from '../Card'
import { Container } from '@chakra-ui/react'
import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  {
    articles {
      id
      slug
      title
      description
      updated_at
      category {
        id
        name
      }
      image {
        url
        alternativeText
      }
    }
  }
`

const BlogCards = (props) => {
  const { category } = props
  const { loading, error, data } = useQuery(QUERY)
  if (error) return <p>Error loading articles</p>
  if (loading) return <h1>Fetching</h1>

  const filteredArticlesByCategory = data.articles.filter((article) => article.category?.id === category?.id)

  return (
    <Container bg="gray.50">
      {filteredArticlesByCategory.map((article) => {
        return <Card key={article.id} article={article}></Card>
      })}
    </Container>
  )
}

export default BlogCards
