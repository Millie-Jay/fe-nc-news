import axios from "axios";

const api = axios.create({
  baseURL: "https://bc-nc-news-iv0p.onrender.com/api",
});

const getArticles = () => {
  return api
    .get("/articles")
    .then(({ data }) => {
      console.log(data.articles);
      return data.articles;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
      throw error; // Re-throw to handle it further up the call chain if necessary
    });
};

const getTopics = () => {
  return api
    .get("/topics")
    .then(({ data }) => {
      console.log(data.topics);
      return data.topics;
    })
    .catch((error) => {
      console.error("Error fetching topics:", error);
      throw error; // Re-throw to handle it further up the call chain if necessary
    });
};

export { getArticles, getTopics };
