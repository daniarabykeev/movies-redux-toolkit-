import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home.jsx/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MainLayouts from "./components/layouts/MainLayouts";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
