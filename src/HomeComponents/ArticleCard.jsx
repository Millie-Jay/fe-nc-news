import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <section className="article-card">
        <img src={article.article_img_url} alt={`${article.title} image`} />
        <p>{article.title}</p>
        <p>{article.author}</p>
        <button disabled aria-label="number of votes">
          <i className="fa-solid fa-heart"></i>
          {article.votes}
        </button>
        <button disabled aria-label="number of comments">
          <i className="fa-solid fa-message"></i>
          {article.comment_count}
        </button>
      </section>
    </Link>
  );
}
