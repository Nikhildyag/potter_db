import React from "react";
import SideBar from "./SideBar.tsx";
import Body from "./Body.tsx";

const HomePage = () => {
  return (
    <div>
      <div className="flex relative bg-black h-screen ">
        <div className="w-2/12">
          <SideBar />
        </div>
        <div className="w-10/12">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
