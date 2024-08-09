import React, { useState } from "react";
import { postComment } from "../api";

export default function CommentForm({ articleId, onCommentSubmit }) {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(articleId, { body, author })
      .then((newComment) => {
        onCommentSubmit(newComment);
        setBody("");
        setAuthor("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
        placeholder="Write your comment here..."
        required
      ></textarea>
      <input
        type="text"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        placeholder="Your name"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
