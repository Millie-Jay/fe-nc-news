import React from "react";

export default function ArticleCard(props) {
  const { article } = props;

  return (
    <section className="article-card">
      <img src={article.article_img_url} alt={`${article.title} image`} />
      <p>{article.title}</p>
      <p>{article.author}</p>
      <button disabled aria-label="number of votes">
        <i class="fa-solid fa-heart"></i>
        {article.votes}
      </button>
      <button disabled aria-label="number of comments">
        <i class="fa-solid fa-message"></i>
        {article.comment_count}
      </button>
    </section>
  );
}
