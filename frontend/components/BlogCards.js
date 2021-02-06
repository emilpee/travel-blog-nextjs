import Card from './Card'
import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  {
    articles {
      id
      slug
      title
      description
      updated_at
    }
  }
`

const BlogCards = (props) => {
  const { loading, error, data } = useQuery(QUERY)
  if (error) return 'Error loading articles'
  if (loading) return <h1>Fetching</h1>

  return (
    <div>
      {data.articles.map((article) => {
        return <Card key={article.id} article={article}></Card>
      })}
    </div>
  )
}

export default BlogCards
