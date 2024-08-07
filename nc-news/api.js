import axios from "axios";

const api = axios.create({
  baseURL: "https://bc-nc-news-iv0p.onrender.com/api",
});

const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    console.log(data.articles);
    return data.articles;
  });
};

const getTopics = () => {
  return api.get("/topics").then(({ data }) => {
    console.log(data.topics);
    return data.topics;
  });
};

const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}/`).then(({ data }) => {
    return data.article;
  });
};

const getCommentsById = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export { getArticles, getTopics, getArticleById };
