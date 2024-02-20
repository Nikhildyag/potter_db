import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <ul className=" border-t-0 text-white w-2/12 shadow-md h-[100vh] absolute  overflow-x-hidden bg-gray-950 text-red-8  00">
        <Link to={"/books"}>
          <li className=" text-xl mx-10 p-2 my-4 rounded-lg text-center hover:bg-purple-500  ">
            Books
          </li>
        </Link>
        <Link to={"/movies"}>
          <li className=" text-xl mx-10 p-2 my-4 rounded-lg text-center hover:bg-purple-500">
            Movies
          </li>
        </Link>
        <Link to={"/charecters"}>
          <li className=" text-xl mx-10 p-2 my-4 rounded-lg text-center hover:bg-purple-500">
            Charecters
          </li>
        </Link>
        <Link to={"/potions"}>
          <li className=" text-xl mx-10 p-2 my-4 rounded-lg text-center hover:bg-purple-500">
            Potions
          </li>
        </Link>
        <Link to={"/spells"}>
          <li className=" text-xl mx-10 p-2 my-4 rounded-lg text-center hover:bg-purple-500">
            Spells
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
