import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId, voteOnComment } from "../api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
      })
      .catch((err) => {
        console.error(err);
      });

    getCommentsByArticleId(article_id)
      .then((commentsData) => {
        setComments(commentsData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [article_id]);

  const handleCommentSubmit = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  const handleVote = (comment_id, vote) => {
    voteOnComment(comment_id, vote)
      .then((updatedComment) => {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.comment_id === comment_id ? updatedComment : comment
          )
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
      <CommentForm
        articleId={article.article_id}
        onCommentSubmit={handleCommentSubmit}
      />
      <div className="comments-section">
        {comments.map((comment) => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            onVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
}
