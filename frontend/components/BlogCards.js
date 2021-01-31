import Card from './Card'

const BlogCards = (props) => {
  const { articles } = props
  return (
    <div>
      {articles &&
        articles.map((article) => {
          return <Card key={article.id} article={article}></Card>
        })}
    </div>
  )
}

export default BlogCards
