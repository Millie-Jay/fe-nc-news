import React, { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <section className="article-list">
      <ul className="article-grid">
        {articles.map((article, article_id) => (
          <ArticleCard key={article_id} article={article} />
        ))}
      </ul>
    </section>
  );
};

export default ArticleList;
