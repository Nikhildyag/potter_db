import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BOOK_URL } from "../utils/constants.tsx";

const BodyItems = () => {
  const { id } = useParams();
  const [fetchBodyItems, setFetchBodyItems] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(BOOK_URL + id);
      if (!response.ok) {
        throw new Error(
          "unable to fetch the data ,please check url or network connectivity"
        );
      }
      const data = await response.json();
      const _Body_items = data?.data;
      setFetchBodyItems(_Body_items);
    } catch (error) {
      console.error(`some error occured ${error}`);
    }
  };

  const { title, author, cover, release_date, pages, summary, dedication } =
    fetchBodyItems.attributes;

  // console.log(id);
  return (
    <div className=" w-8/12 mx-auto my-36">
      <h2 className="text-center font-bold text-4xl m-4">{title}</h2>
      <div className="flex border p-10">
        <div>
          <img className=" w-96" src={cover} />
        </div>
        <div className="w-10/12 mx-5">
          <h3 className="m-3 font-bold">Author: {author}</h3>
          <hr />
          <h4 className="m-3 font-bold">Release Date: {release_date}</h4>
          <hr />
          <h4 className="m-3 font-bold">No.of Pages: {pages}</h4>
          <hr />
          <h4 className="m-3 font-bold">Summary: {summary}</h4>
          <hr />
          <h4 className="m-3 font-bold">Dedication: {dedication}</h4>
          <hr />
        </div>
      </div>
    </div>
    // <div>mikjil</div>
  );
};

export default BodyItems;
