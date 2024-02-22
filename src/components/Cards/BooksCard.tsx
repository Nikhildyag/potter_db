import React from "react";

const BooksCard = ({ Bookdata }) => {
  const { title, cover, release_date, pages, author, id } = Bookdata.attributes;
  return (
    <div className="w-60 m-10 rounded-xl cursor-pointer shadow-md">
      <img className="rounded-xl p-2" src={cover} />
      <div className="p-2 mx-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <h2 className="font-bold">{release_date}</h2>
        <h2 className="font-bold">{pages}</h2>
        <h2 className="font-bold">{author}</h2>
        <h2 className="font-bold">{id}</h2>
      </div>
      nikhil
    </div>
  );
};

export default BooksCard;
