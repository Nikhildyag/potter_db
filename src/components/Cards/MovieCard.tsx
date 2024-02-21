import React from "react";

const MovieCard = ({ movData }) => {
  const { slug, poster, release_date, running_time } = movData.attributes;
  return (
    <div className="w-60 m-10 rounded-xl cursor-pointer shadow-md">
      <img className="rounded-xl p-2" src={poster} />
      <div className="p-2 mx-2">
        <h1 className="font-bold text-xl">{slug}</h1>
        <h2 className="font-bold">{release_date}</h2>
        <h2 className="font-bold">{running_time}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
