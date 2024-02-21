import React, { useEffect, useState } from "react";
import { CHARACTER_URL } from "../utils/constants.tsx";
import CharacterCard from "./Cards/CharacterCard.tsx";

const Charecters = () => {
  interface character {
    attributes: {};
  }
  const [characterData, setCharacterData] = useState<character[]>([]);

  const fetchData = async () => {
    const response = await fetch(CHARACTER_URL);
    if (!response.ok) {
      throw new Error(
        "unable to fetch the data ,please check url or network connectivity"
      );
    }
    const data = await response?.json();
    const _characters = data?.data;
    //console.log(_characters);
    setCharacterData(_characters);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap w-8/12 m-auto">
      {characterData.map((character) => (
        <CharacterCard chardata={character} />
      ))}
    </div>
  );
};

export default Charecters;
