import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({
  handleAddtoWatchList,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setpageNo] = useState(1);
  const handlePrev = () => {
    if (pageNo === 1) {
      setpageNo(pageNo);
    } else {
      setpageNo(pageNo - 1);
    }
  };
  const handleNext = () => {
    setpageNo(pageNo + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=0679748c34183937f0900ddd7b21c30e&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]); // Correctly place the dependency array here

  /* while (movies.length % 8 !== 0) {
    movies.push({
      id: `empty-${movies.length}`,
      name: "Coming Soon",
      poster_path: "",
    });
  } */

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around gap-5">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddtoWatchList={handleAddtoWatchList}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;

/*

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({
  handleAddtoWatchList,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=0679748c34183937f0900ddd7b21c30e&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  // Ensure movie array has multiples of 8 by adding placeholder items
  const paddedMovies = [...movies];
  while (paddedMovies.length % 8 !== 0) {
    paddedMovies.push({
      id: `empty-${paddedMovies.length}`,
      name: "Coming Soon",
      poster_path: "/default-poster.jpg", // Assign default poster
    });
  }

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around gap-5">
        {paddedMovies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            movieObj={movieObj}
            poster_path={movieObj.poster_path}
            name={movieObj.name}
            handleAddtoWatchList={handleAddtoWatchList}
            handleRemoveFromWatchlist={handleRemoveFromWatchlist}
            watchlist={watchlist}
          />
        ))}
      </div>

      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;

*/
