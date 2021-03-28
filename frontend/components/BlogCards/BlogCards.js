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
      image {
        url
        alternativeText
      }
    }
  }
`

const BlogCards = (props) => {
  const { loading, error, data } = useQuery(QUERY)
  if (error) return 'Error loading articles'
  if (loading) return <h1>Fetching</h1>

  return (
    <Container bg="gray.50">
      {data.articles.map((article) => {
        return <Card key={article.id} article={article}></Card>
      })}
    </Container>
  )
}

export default BlogCards
