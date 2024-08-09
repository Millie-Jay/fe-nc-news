import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./HomeComponents/Home";
import ArticlePage from "./ArticlePage";
import "./App.css";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </section>
  );
}

export default App;
