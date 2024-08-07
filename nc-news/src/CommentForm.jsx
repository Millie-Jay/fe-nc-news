import React, { useState } from "react";
import { postComment } from "../api";

export default function CommentForm({ articleId, onCommentSubmit }) {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(articleId, { body, author })
      .then((newComment) => {
        onCommentSubmit(newComment);
        setBody("");
        setAuthor("");
        setError(""); // Clear any previous errors
      })
      .catch((err) => {
        setError("Failed to submit comment.");
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write your comment here..."
        required
      ></textarea>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name"
        required
      />
      <button type="submit">Submit</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}
