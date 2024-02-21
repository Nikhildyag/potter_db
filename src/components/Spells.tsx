import React, { useEffect, useState } from "react";
import { SPELLS_URL } from "../utils/constants.tsx";
import SpellsCard from "./Cards/SpellsCard.tsx";

const Spells = () => {
  interface spell {
    attributes: {};
  }
  const [spellData, setSpellData] = useState<spell[]>([]);

  const fetchData = async () => {
    const response = await fetch(SPELLS_URL);
    if (!response.ok) {
      throw new Error(
        "unable to fetch the data ,please check url or network connectivity"
      );
    }
    const data = await response?.json();
    const _spells = data?.data;
    //console.log(_characters);
    setSpellData(_spells);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap w-8/12 m-auto">
      {spellData.map((spell) => (
        <SpellsCard spelData={spell} />
      ))}
    </div>
  );
};

export default Spells;
