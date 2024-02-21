import React from "react";
import { DEFAULT_CHARACTER_URL } from "../../utils/constants.tsx";

const SpellsCard = ({ spelData }) => {
  const { slug, image, category, incantation } = spelData.attributes;
  return (
    <div className="w-60 m-10 rounded-xl cursor-pointer shadow-md h-96 overflow-y-hidden ">
      <img
        className="rounded-xl p-2 h-52 w-56"
        src={image === null ? DEFAULT_CHARACTER_URL : image}
      />
      <div className="p-2">
        <h1 className="font-bold text-xl">{slug}</h1>
        <h2 className="font-bold">{category}</h2>
        <h2 className="font-bold overflow-x-hidden">{incantation}</h2>
      </div>
    </div>
  );
};

export default SpellsCard;
