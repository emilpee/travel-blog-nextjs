import React from 'react'
import { fetchAPI } from '../api/strapi'
import { BlogContainer, BlogCards, Header } from '../components'

const Home = (props) => {
  return (
    <div>
      <Header></Header>
      <BlogContainer>
        <BlogCards articles={props.articles} />
      </BlogContainer>
    </div>
  )
}

export const getStaticProps = async () => {
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI('/articles?status=published'),
    fetchAPI('/categories'),
    fetchAPI('/homepage'),
  ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

export default Home
