import React from "react";
import { fetchAPI } from "../api/strapi";

const Home = (props) => {
  const { articles } = props
  return (
      <div>
        {articles.map((article) => <h1 key={article.id}>{article.title}</h1>)}
      </div>
  );
};

export const getStaticProps = async () => {
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
  };
}

export default Home;
