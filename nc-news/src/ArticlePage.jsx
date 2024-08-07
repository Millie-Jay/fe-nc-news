import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getCommentsById,
  postComment,
  voteOnComment,
  voteOnArticle,
} from "../api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null); // Error state for handling errors
  const { article_id } = useParams();

  useEffect(() => {
    // Fetch article and comments on mount
    Promise.all([getArticleById(article_id), getCommentsById(article_id)])
      .then(([articleData, commentsData]) => {
        setArticle(articleData);
        setComments(commentsData);
      })
      .catch((err) => {
        setError("Failed to load article and comments.");
        console.error(err);
      });
  }, [article_id]);

  const handleCommentSubmit = (newComment) => {
    postComment(article_id, newComment)
      .then((createdComment) => {
        setComments((prevComments) => [createdComment, ...prevComments]);
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        setError("Failed to submit comment.");
        console.error(err);
      });
  };

  const handleVoteOnComment = (comment_id, vote) => {
    voteOnComment(comment_id, vote)
      .then((updatedComment) => {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.comment_id === comment_id ? updatedComment : comment
          )
        );
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        setError("Failed to vote on comment.");
        console.error(err);
      });
  };

  const handleVoteOnArticle = (vote) => {
    voteOnArticle(article_id, vote)
      .then((updatedArticle) => {
        setArticle(updatedArticle);
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        setError("Failed to vote on article.");
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
      <div className="article-votes">
        <button
          onClick={() => handleVoteOnArticle(1)}
          aria-label="upvote article"
        >
          <i className="fa-solid fa-thumbs-up"></i> {article.votes}
        </button>
        <button
          onClick={() => handleVoteOnArticle(-1)}
          aria-label="downvote article"
        >
          <i className="fa-solid fa-thumbs-down"></i>
        </button>
      </div>
      <CommentForm
        articleId={article.article_id}
        onCommentSubmit={handleCommentSubmit}
      />
      {error && <p className="error-message">{error}</p>}
      <div className="comments-section">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
