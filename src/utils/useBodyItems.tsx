import { useEffect, useState } from "react";
import { BOOK_URL } from "./constants.tsx";

const useBodyItems = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BOOK_URL + resId);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useBodyItems;
