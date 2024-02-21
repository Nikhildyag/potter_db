import React from "react";
import { LOGO_URL } from "../utils/constants.tsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-black justify-between text-white">
      <div>
        <img className="w-28 mx-16 my-5" src={LOGO_URL} alt="logo" />
      </div>
      <div className="justify-center">
        <ul className="flex">
          <Link to="/">
            <li className="m-7 font-bold cursor-pointer hover:text-violet-950">
              Home
            </li>
          </Link>
          <li className="m-7 font-bold cursor-pointer hover:text-violet-950">
            About Us
          </li>
          <li className="m-7 font-bold cursor-pointer hover:text-violet-950">
            Contact
          </li>
          <a href="https://docs.potterdb.com/">
            <li className="m-7 font-bold cursor-pointer hover:text-violet-950">
              API Docs
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
