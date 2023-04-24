import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/MoviesSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return (
          <div key={index}>
            <MovieCard data={movie} />
          </div>
        );
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );
  console.log(renderMovies);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
