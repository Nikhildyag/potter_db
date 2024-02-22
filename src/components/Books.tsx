import React, { useEffect, useState } from "react";
import { BOOK_URL } from "../utils/constants.tsx";
import BooksCard from "./Cards/BooksCard.tsx";
import { Link } from "react-router-dom";

const Books = () => {
  interface Book {
    id: string;
    attributes: {};
  }
  const [fetchedData, setFetchedData] = useState<Book[]>([]);

  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          "unable to fetch the data ,please check url or network connectivity"
        );
      }
      const data = await response.json();
      const _Books = data?.data;
      setFetchedData(_Books);
      console.log(fetchedData);
    } catch (error) {
      console.error(`some error occured ${error}`);
    }
  }

  useEffect(() => {
    fetchData(BOOK_URL);
  }, []);

  return (
    <div>
      <div className="flex flex-wrap w-8/12 m-auto">
        {fetchedData?.map((book) => (
          <Link to={"/books/" + book?.id}>
            <BooksCard Bookdata={book} />
            //
          </Link>
        ))}
        {/* nikhil */}
      </div>
    </div>
  );
};

export default Books;
