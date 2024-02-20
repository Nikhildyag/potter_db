import React from "react";

const BookCard = ({ Bookdata }) => {
  return (
    <div className="w-60 m-10 rounded-xl cursor-pointer">
      <img
        className="rounded-xl p-2"
        src={Bookdata.attributes.cover}
        alt={Bookdata?.attributes?.title}
      />
      <div className="p-2">
        <h1 className="font-bold text-xl">{Bookdata?.attributes?.title}</h1>
        <h2 className="font-bold">{Bookdata?.attributes?.release_date}</h2>
        <h3 className="font-bold">{Bookdata?.attributes?.pages}</h3>
        <h1 className="font-bold">{Bookdata?.attributes?.author}</h1>
      </div>
    </div>
  );
};

export default BookCard;
