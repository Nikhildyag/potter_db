import React, { useEffect, useState } from "react";
import { POTIONS_URL } from "../utils/constants.tsx";
import PotionsCard from "./Cards/PotionsCard.tsx";

const Potions = () => {
  interface potion {
    attributes: {};
  }
  const [potionData, setPotionData] = useState<potion[]>([]);

  const fetchData = async () => {
    const response = await fetch(POTIONS_URL);
    if (!response.ok) {
      throw new Error(
        "unable to fetch the data ,please check url or network connectivity"
      );
    }
    const data = await response?.json();
    const _potions = data?.data;
    //console.log(_characters);
    setPotionData(_potions);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap w-8/12 m-auto">
      {potionData.map((potion) => (
        <PotionsCard potData={potion} />
      ))}
    </div>
  );
};

export default Potions;
