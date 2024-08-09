import React from "react";

const CommentCard = ({ comment, onVote }) => {
  const handleUpvote = () => onVote(comment.comment_id, 1);
  const handleDownvote = () => onVote(comment.comment_id, -1);

  return (
    <div className="comment-card">
      <p>
        <strong>{comment.author}</strong>:
      </p>
      <p>{comment.body}</p>
      <p>{new Date(comment.created_at).toLocaleDateString()}</p>
      <div className="comment-votes">
        <button onClick={handleUpvote} aria-label="upvote comment">
          <i className="fa-solid fa-thumbs-up"></i> {comment.votes}
        </button>
        <button onClick={handleDownvote} aria-label="downvote comment">
          <i className="fa-solid fa-thumbs-down"></i>
        </button>
      </div>
    </div>
  );
};

export default React.memo(CommentCard);
