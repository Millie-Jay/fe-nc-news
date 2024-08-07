import React from "react";

export default function CommentCard({ comment, onVote }) {
  return (
    <div className="comment-card">
      <p>
        <strong>{comment.author}</strong>:
      </p>
      <p>{comment.body}</p>
      <p>{new Date(comment.created_at).toLocaleDateString()}</p>
    </div>
  );
}
