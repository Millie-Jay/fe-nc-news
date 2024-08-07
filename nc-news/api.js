import axios from "axios";

const api = axios.create({
  baseURL: "https://bc-nc-news-iv0p.onrender.com/api",
});

// Existing functions
const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

const getTopics = () => {
  return api.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

const getCommentsById = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

const postComment = (article_id, comment) => {
  return api
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    });
};

const voteOnComment = (comment_id, vote) => {
  return api
    .patch(`/comments/${comment_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.comment;
    });
};

const voteOnArticle = (article_id, vote) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.article;
    });
};

export {
  getArticles,
  getTopics,
  getArticleById,
  getCommentsById,
  postComment,
  voteOnComment,
  voteOnArticle,
};
