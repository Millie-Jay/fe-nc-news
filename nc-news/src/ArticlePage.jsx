import React, { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const [article, setArticle] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div id="article-page">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title} />
      <p>{article.author}</p>
      <p>{new Date(article.created_at).toLocaleDateString()}</p>
      <p>{article.body}</p>
    </div>
  );
}
