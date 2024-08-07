import React from "react";
import ArticleList from "./HomeComponents/ArticleList";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./HomeComponents/Home";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
