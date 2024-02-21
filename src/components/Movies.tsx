import React, { useEffect, useState } from "react";
import { MOVIE_URL } from "../utils/constants.tsx";
import CharacterCard from "./Cards/CharacterCard.tsx";
import MovieCard from "./Cards/MovieCard.tsx";

const Movies = () => {
  interface movie {
    attributes: {};
  }
  const [movieData, setMovieData] = useState<movie[]>([]);

  const fetchData = async () => {
    const response = await fetch(MOVIE_URL);
    if (!response.ok) {
      throw new Error(
        "unable to fetch the data ,please check url or network connectivity"
      );
    }
    const data = await response?.json();
    const _characters = data?.data;
    //console.log(_characters);
    setMovieData(_characters);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap w-8/12 m-auto">
      {movieData.map((movie) => (
        <MovieCard movData={movie} />
      ))}
    </div>
  );
};

export default Movies;
